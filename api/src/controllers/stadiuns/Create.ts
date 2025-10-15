import { Request, RequestHandler, Response } from "express";
import { TBodyProps, TStadium } from "../../@types";
import { ValidatorFunctions } from "../../shared/middleware";
import { StatusCodes } from 'http-status-codes'
import { StadiumProviders } from "../../database/providers";
import yup from "yup"

export const createValidation: RequestHandler = ValidatorFunctions.validation({
    body: yup.object().shape({
        name: yup.string().required().min(3),
        capacity: yup.number().required(),
        constructionDate: yup.string().required()
    })
});

export const create = async (request: Request<{}, {}, TBodyProps>, response: Response) => {

    let result: number | bigint | Error | undefined = undefined;

    try {
        const stadiumDatas: Partial<TStadium> = {
            name: request.body.name,
            capacity: request.body.capacity,
            constructionDate: request.body.constructionDate
        }

        result = StadiumProviders.createStadiumProvider(stadiumDatas);

        return response.status(StatusCodes.CREATED).json({ 
            id: result 
        });
        
    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: {
                default: result
            } 
        })
    }

}
