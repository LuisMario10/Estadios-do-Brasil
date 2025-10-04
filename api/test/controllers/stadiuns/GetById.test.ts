import { StatusCodes } from "http-status-codes";
import { testApp } from "../../jest.setup";

describe('Controller - GetAll', () => {
    it('Get stadium by id', async () => {
        const result = await testApp
        .post('/estadios')
        .send({
            name: "Neo Quimica Arena",
            capacity: 40000,
            constructionDate: "06/06/2015"
        });

        expect(result.statusCode).toEqual(StatusCodes.CREATED)

        const result2 = await testApp
            .get(`/estadios/${result.body}`)
            .send();

        expect(result2.statusCode).toEqual(StatusCodes.OK);
        expect(result2.body).toHaveProperty('name');
    });

    it('Get stadium with unexpected id', async () => {
        const result = await testApp
        .get('/estadios/999999')
        .send();


        expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(result.body).toEqual('errors.default');
    });
});