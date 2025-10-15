// Implementar depois a paginação para evtar que a API tenha problema de performace devolvendo todos os dados do banco

import { Request, RequestHandler, Response } from "express";
import { StadiumProviders } from "../../database/providers";
import { StatusCodes } from 'http-status-codes'
import { ValidatorFunctions } from "../../shared/middleware/validators";
import { TQueryProps } from "../../@types";
import yup from "yup"

export const getAllValidation: RequestHandler = ValidatorFunctions.validation({
    query: yup.object().shape({
        page: yup.number().notRequired().moreThan(0),
        limit: yup.number().notRequired().moreThan(0),
        id: yup.number().notRequired().moreThan(0),
        filter: yup.string().notRequired()
    })
});

export const getAll = async (request: Request<{}, {}, {}, TQueryProps>, response: Response) => {
    response.setHeader('access-control-expose-headers', 'x-total-count');
    response.setHeader('x-total-count', 1);

    let result = undefined;

    try {
        result = StadiumProviders.getAllStadiunsProvider()

        return response.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            msg: "Resgatado Estadios da base de dados",
            datas: result
        });
    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result
            }
        });
    }

}
