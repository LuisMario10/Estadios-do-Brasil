import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from 'http-status-codes'
import { ValidatorFunctions } from "../../shared/middleware/validators";
import { TParamsProps } from "../../@types";
import yup from "yup"


export const getByIDValidation: RequestHandler = ValidatorFunctions.validation({
    body: yup.object().shape({
        name: yup.string().required().min(3),
        capacity: yup.number().required(),
        constructionDate: yup.string().required()
    })
});

export const getByID = async (request: Request<TParamsProps>, response: Response) => {
    if(Number(request.params.id) === 999999) 

        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                errors: {
                    default: "Registro nao encontrado"
                }
            })

    return response.status(StatusCodes.OK).json([
        { id: 12, name: "Morumbis", capacity: 80000, constructionDate: "07/05/1970" }
    ]);
}
