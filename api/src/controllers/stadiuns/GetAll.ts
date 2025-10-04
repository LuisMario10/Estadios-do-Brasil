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
    response.setHeader('access-control-expose-headers', 'x-total-count');
    response.setHeader('x-total-count', 1);


    console.log(request);
    return response.status(StatusCodes.OK).json([
        { id: 1, name: "Allianz Parque", capacidade: 60000, constructionDate: "09/09/2016" }
    ]);

}
