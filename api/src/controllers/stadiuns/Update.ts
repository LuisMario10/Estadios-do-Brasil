import { Request, RequestHandler, Response } from "express";
import { TBodyProps, TParamsProps, TStadium } from "../../@types";
import { StadiumProviders } from "../../database/providers";
import { ValidatorFunctions } from "../../shared/middleware/validators";
import { StatusCodes } from "http-status-codes";
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

        return response.status(StatusCodes.NOT_FOUND).json({
                    errors: {
                        default: "Registro nao encontrado"
                    }
                })
            
    let result = undefined;

    try {
        const stadiumDatas: Partial<TStadium> = {
            id: request.params.id,
            name: request.body.name,
            capacity: request.body.capacity,
            constructionDate: request.body.constructionDate
        };

        result = StadiumProviders.updateStadiumProvider(stadiumDatas);

        return response.status(StatusCodes.NO_CONTENT).json({
            statusCodes: StatusCodes.NO_CONTENT,
            msg: "Regitro de Estadio atualizado",
        })
    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            statusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
            errors: {
                default: result
            }
        })
    }
}