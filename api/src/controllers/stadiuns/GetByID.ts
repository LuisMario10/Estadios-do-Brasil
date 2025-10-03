import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from 'http-status-codes'
import { ValidatorFunctions } from "../../shared/middleware/validators";
import { TQueryProps } from "../../types";
import yup from "yup"


export const getByIDValidation: RequestHandler = ValidatorFunctions.validation({
    body: yup.object().shape({
        name: yup.string().required().min(3),
        capacity: yup.number().required(),
        constructionDate: yup.string().required()
    })
});

export const getByID = async (request: Request<TQueryProps>, response: Response) => {

    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não Implementado!!!");
}
