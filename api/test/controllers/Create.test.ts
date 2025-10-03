import { StatusCodes } from "http-status-codes";
import { testApp } from "../jest.setup";

describe('Controller - Create', () => {
    it('Create stadium register', async () => {
        const result = await testApp
        .post('/estadios')
        .send({
            name: "São Januario",
            capacity: 23000,
            constructionDate: "06-06-1926"
        });


        expect(result.statusCode).toEqual(StatusCodes.CREATED);
        expect(result.body).toHaveProperty('error')
    });
});