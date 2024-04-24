import { BaseError } from "./BaseError";

class BadRequest extends BaseError{
    constructor(public error: string){
        super('DBError: Internal Server Error');
        Object.setPrototypeOf(this, BadRequest.prototype);
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
    return [{message: this.error}]
        
    }
    statusCode: number = 400;
     
}

export default BadRequest;