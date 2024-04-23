import { ValidationError } from "express-validator";
import { BaseError } from "./BaseError";

export class RequestValidationError extends BaseError{
    constructor(public errors: ValidationError[]){
        super('RequestValidationError: Invalid Request');
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    statusCode = 400;
    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return this.errors.map((err: ValidationError) => {
            return {message: err.msg, field: err.type === 'field' ? err.path : undefined}
        })
    }
    
}