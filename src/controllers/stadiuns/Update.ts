import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ValidatorFunctions } from "../../shared/middleware/validators";
import yup from "yup";

export const update = async (request: Request, response: Response) => {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não Implementado!!!");
}