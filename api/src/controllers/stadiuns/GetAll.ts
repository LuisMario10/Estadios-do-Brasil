import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from 'http-status-codes'
import { ValidatorFunctions } from "../../shared/middleware/validators";
import { TQueryProps } from "../../types";
import yup from "yup"


export const getAllValidation: RequestHandler = ValidatorFunctions.validation({
    query: yup.object().shape({
        page: yup.number().notRequired().moreThan(0),
        limit: yup.number().notRequired().moreThan(0),
        filter: yup.string().notRequired()
    })
});

export const getAll = async (request: Request<{}, {}, {}, TQueryProps>, response: Response) => {
    console.log(request);
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não Implementado!!!");

}
