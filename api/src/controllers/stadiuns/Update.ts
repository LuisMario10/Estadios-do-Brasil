import { Request, RequestHandler, Response } from "express";
import { ValidatorFunctions } from "../../shared/middleware/validators";
import { StatusCodes } from "http-status-codes";
import { TBodyProps, TParamsProps } from "../../types";
import yup from "yup";

export const updateValidation: RequestHandler = ValidatorFunctions.validation({
    body: yup.object().shape({
        name: yup.string().required().min(3),
        capacity: yup.number().required(),
        constructionDate: yup.string().required()
    }),
    params: yup.object().shape({
        id: yup.number().notRequired().moreThan(0),
    })
});

export const update = async (request: Request<TParamsProps, {}, TBodyProps>, response: Response) => {
    if(Number(request.params.id) === 999999) 

        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                errors: {
                    default: "Registro nao encontrado"
                }
            })
            

    return response.status(StatusCodes.NO_CONTENT).send();
}