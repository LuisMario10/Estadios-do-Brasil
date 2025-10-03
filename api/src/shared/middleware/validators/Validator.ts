import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import yup from "yup";

type TProperty = 'header' | 'body' | 'query' | 'filter' | 'params';

type TAllSchemas = Record<TProperty, yup.ObjectSchema<any>>;

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

export const validation: TValidation = (schemas) => 
    async (request, response, next) => {

        const errorsResult: Record<string, Record<string, string>> = {};

        Object.entries(schemas).forEach(([key, schema]) => {
            try {
               schema.validateSync(request[key as TProperty], { abortEarly: false});
               
            } catch(error) {
                const yupError = error as yup.ValidationError;
                const errors: Record<string, string> = {};

                yupError.inner.forEach(err => {
                    if(!err.path) return;

                    errors[err.path] = err.message;
                });

                errorsResult[key as TProperty] = errors;
                
            }
        });

        if(Object.entries(errorsResult).length === 0) {
            return next();
        } else {
            return response.status(StatusCodes.BAD_REQUEST).json({ errorsResult });
        }
    }
