import {validationResult} from 'express-validator';
import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../cutom_errors/RequestValidationError";

function requestValidationErrorValidate(req: Request, res:Response, next:NextFunction){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new RequestValidationError(errors.array()));
    }
    next();
}

export default requestValidationErrorValidate;