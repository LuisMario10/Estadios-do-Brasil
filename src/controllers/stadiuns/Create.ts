import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from 'http-status-codes'
import { ValidatorFunctions } from "../../shared/middleware/validators";
import yup from "yup"

interface IStadium {
    name: string,
    capacity: number,
    constructionDate: string
}   

export const createValidation: RequestHandler = ValidatorFunctions.validation({
    body: yup.object().shape({
        name: yup.string().required().min(3),
        capacity: yup.number().required(),
        constructionDate: yup.string().required()
    })
});

export const create = async (request: Request<{}, {}, IStadium>, response: Response) => {
    console.log(request);
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não Implementado!!!");
}
