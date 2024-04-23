import { Request, Response, NextFunction } from "express"
import { BaseError } from "../cutom_errors/BaseError"
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("in the error handler")
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({errors: err.serializeErrors()})
    }else{
        return res.status(400).json(
            {errors: [{message:"Something went wrong"}]}
        )
    }
}