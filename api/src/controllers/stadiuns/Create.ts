import { Request, RequestHandler, Response } from "express";
import { ValidatorFunctions } from "../../shared/middleware/validators";
import { StatusCodes } from 'http-status-codes'
import { TBodyProps } from "../../@types";
import yup from "yup"


export const createValidation: RequestHandler = ValidatorFunctions.validation({
    body: yup.object().shape({
        name: yup.string().required().min(3),
        capacity: yup.number().required(),
        constructionDate: yup.string().required()
    })
});

export const create = async (request: Request<{}, {}, TBodyProps>, response: Response) => {
    console.log(request);
    return response.status(StatusCodes.CREATED).json({ id: 1 });
}
