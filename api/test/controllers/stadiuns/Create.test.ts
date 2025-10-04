import { StatusCodes } from "http-status-codes";
import { testApp } from "../../jest.setup";

describe('Controller - Create', () => {
    it('Create stadium register', async () => {
        const result = await testApp
        .post('/estadios')
        .send({
            name: "São Januario",
            capacity: 23000,
            constructionDate: "06/06/1926"
        });


        expect(result.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof result.body).toEqual('number');
    });

    it('Create stadium register with short name', async () => {
        const result = await testApp
        .post('/estadios')
        .send({
            name: "ab",
            capacity: 23000,
            constructionDate: "06/06/1926"
        });


        expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result.body).toHaveProperty('errors.body.name');
    });


    it('Create stadium register with negative capacity', async () => {
        const result = await testApp
        .post('/estadios')
        .send({
            name: "Maracanã",
            capacity: -1,
            constructionDate: "06/06/1926"
        });


        expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result.body).toHaveProperty('errors.body.capacity');
    });


    it('Create stadium register with poorly formatted date', async () => {
        const result = await testApp
        .post('/estadios')
        .send({
            name: "ab",
            capacity: 23000,
            constructionDate: "06/06/1926"
        });


        expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result.body).toHaveProperty('errors.body.constructionDate');
    });
});