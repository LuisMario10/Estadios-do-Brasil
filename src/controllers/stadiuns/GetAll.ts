import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from 'http-status-codes'
import { ValidatorFunctions } from "../../shared/middleware/validators";
import yup from "yup"

interface IQueryProps {
    page?: number,
    limit?: number,
    filter?: string
}   

export const getAllValidation: RequestHandler = ValidatorFunctions.validation({
    query: yup.object().shape({
        page: yup.number().notRequired().moreThan(0),
        limit: yup.number().notRequired().moreThan(0),
        filter: yup.string().notRequired()
    })
});

export const getAll = async (request: Request<{}, {}, {}, IQueryProps>, response: Response) => {
    console.log(request);
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não Implementado!!!");

}
