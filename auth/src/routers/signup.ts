import { Router } from "express";
import {body} from 'express-validator';
import { Request, Response, NextFunction } from "express";
import requestValidationErrorValidate from "../middleware/requestValidationErrorValidate";
import User from '../db/models/user';
import DBError from '../cutom_errors/DBError';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/', [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({ min: 6, max: 20 }).withMessage('Password must be between 6 and 20 characters')
], requestValidationErrorValidate, 
 async (req: Request, res: Response, next: NextFunction) => {
    
    // If validation passes
    const {email, password} = req.body;

    try {
        // Create User
        const user = User.buildUser({email:email, password:password});
        await user.save();
        console.log("user saved success");

        // Generate jwt
        const jwt_token = jwt.sign({
            id: user.id,
            email:user.email
        },'secret_key');

        // save jwt to session/cookie
        req.session = {jwt: jwt_token}
        res.status(200).json(user);
    }catch (error) {
        console.error('Error saving user:', error);
        next(new DBError("Internal Server Error"));
    }

    
});

export {router as signupRouter}