import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from 'http-status-codes'
import { ValidatorFunctions } from "../../shared/middleware/validators";
import yup from "yup"

export const deleteStadium = async (request: Request, response: Response) => {

    console.log(request);

    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não Implementado!!!");
}
