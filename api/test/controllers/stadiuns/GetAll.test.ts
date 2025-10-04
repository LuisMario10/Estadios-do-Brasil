import { StatusCodes } from "http-status-codes";
import { testApp } from "../../jest.setup";

describe('Controller - GetAll', () => {
    it('Get all registers', async () => {
        const result = await testApp
        .post('/estadios')
        .send({
            name: "Maracanã",
            capacity: 90000,
            constructionDate: "06/06/1926"
        });

        expect(result.statusCode).toEqual(StatusCodes.CREATED)

        const result2 = await testApp
            .get('/estadios')
            .send();

        expect(result.statusCode).toEqual(StatusCodes.OK);
        expect(Number(result2.header['x-total-count'])).toBeGreaterThan(0)
        expect(result2.body.length).toBeGreaterThan(0)
    });
});