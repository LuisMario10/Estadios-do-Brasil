import { StatusCodes } from "http-status-codes";
import { testApp } from "../../jest.setup";

describe('Controller - GetAll', () => {
    it('Update stadium by id', async () => {
        const result = await testApp
        .post(`/estadios/`)
        .send({
            name: "Morumbi",
            capacity: 80000,
            constructionDate: "06/06/2015"
        });

        expect(result.statusCode).toEqual(StatusCodes.CREATED)

        const result2 = await testApp
            .put(`/estadios/${result.body}`)
            .send({
                name: "Morumbis",
                capacity: 80000,
                constructionDate: "06/06/2001"
            });

        expect(result2.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Update stadium with unexpected id', async () => {
        const result = await testApp
        .put('/estadios/999999')
        .send({
            name: "Estadio Nilton Santos",
            capacity: 55000,
            constructionDate: "06/06/2015"
        });


        expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(result.body).toEqual('errors.default');
    });
});