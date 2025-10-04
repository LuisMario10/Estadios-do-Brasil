import { StatusCodes } from "http-status-codes";
import { testApp } from "../../jest.setup";


describe('Stadiuns - Delete', () => {

    it('Delete Stadium', async () => {
        const result = await testApp
        .post('/estadios')
        .send({ 
            name: "Beira Rio",
            capacity: 50000,
            constructionDate: '20-10-1980'
         });

        expect(result.statusCode).toEqual(StatusCodes.CREATED);

        const result2 = await testApp.delete(`/estadios/${result.body}`).send()


        expect(result2.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });


    it('Delete stadium with unexpected id', async () => {
        const result = await testApp
        .delete('/estadios/999999')
        .send();


        expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(result.body).toHaveProperty('errors.default');
    });

})