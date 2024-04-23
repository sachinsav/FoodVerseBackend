import { Router } from "express";
import {body, validationResult} from 'express-validator';
import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../cutom_errors/RequestValidationError";

const router = Router();

router.post('/', [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({ min: 6, max: 20 }).withMessage('Password must be between 6 and 20 characters')
], (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new RequestValidationError(errors.array()));
    }
    // If validation passes
    res.status(200).json([{ message: 'Signup page' }]);
});

export {router as signupRouter}