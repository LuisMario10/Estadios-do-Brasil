import { Request, RequestHandler, Response } from "express";
import { TParamsProps, TStadium } from "../../@types";
import { StatusCodes } from 'http-status-codes'
import { StadiumProviders } from "../../database/providers";
import { ValidatorFunctions } from "../../shared/middleware/validators";
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
        return response.status(StatusCodes.NOT_FOUND).json({
                errors: {
                    default: "Registro nao encontrado"
                }
            })
        
    let result = undefined;    

    try {
        const stadiumDatas: Partial<TStadium> = { id: request.params.id }

        result = StadiumProviders.getByIDStadiumProvider(stadiumDatas);
        return response.status(StatusCodes.OK).json({
            statusCodes: StatusCodes.OK,
            msg: "Resgatado Estadio via ID",
            datas: result
        })
    } catch {   
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            statusCodes: StatusCodes.OK,
            errors: {
                default: result
            }
        })
    }
}
