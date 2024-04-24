import { BaseError } from "./BaseError";

class DBError extends BaseError{
    constructor(public error: string){
        super('DBError: Internal Server Error');
        Object.setPrototypeOf(this, DBError.prototype);
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
    return [{message: this.error}]
        
    }
    statusCode: number = 500;
     
}

export default DBError;