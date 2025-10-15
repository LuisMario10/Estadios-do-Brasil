import { Request, RequestHandler, Response } from "express";
import { StadiumProviders } from "../../database/providers";
import { ValidatorFunctions } from "../../shared/middleware/validators";
import { StatusCodes } from 'http-status-codes'
import { TParamsProps, TStadium } from "../../@types";
import yup from "yup"


export const deleteValidation: RequestHandler = ValidatorFunctions.validation({
    params: yup.object().shape({
        id: yup.number().notRequired().moreThan(0)
    })
});

export const deleteStadium = async (request: Request<TParamsProps>, response: Response) => {
    let result = undefined

    if(Number(request.params.id) === 999999) 
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                errors: {
                default: "Registro nao encontrado"
                }
            });

    try {
        const stadiumDatas: Partial<TStadium> = { id: request.params.id };

        result = StadiumProviders.deleteStadiumProvider(stadiumDatas);

        return response.status(StatusCodes.NO_CONTENT).json({
            statusCode: StatusCodes.NO_CONTENT,
            msg: "Estadio deletado com sucesso"
        });
    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json()
    }

}
