import { Request, RequestHandler, Response } from "express";
import { ValidatorFunctions } from "../../shared/middleware/validators";
import { StatusCodes } from 'http-status-codes'
import { TParamsProps } from "../../types";
import yup from "yup"


export const deleteValidation: RequestHandler = ValidatorFunctions.validation({
    params: yup.object().shape({
        id: yup.number().notRequired().moreThan(0)
    })
});

export const deleteStadium = async (request: Request<TParamsProps>, response: Response) => {

    console.log(request);

    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não Implementado!!!");
}
