"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const RequestValidationError_1 = require("../cutom_errors/RequestValidationError");
const router = (0, express_1.Router)();
exports.signupRouter = router;
router.post('/', [
    (0, express_validator_1.body)('email').isEmail().withMessage('Email must be valid'),
    (0, express_validator_1.body)('password').trim().isLength({ min: 6, max: 20 }).withMessage('Password must be between 6 and 20 characters')
], (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return next(new RequestValidationError_1.RequestValidationError(errors.array()));
    }
    // If validation passes
    res.status(200).json([{ message: 'Signup page' }]);
});
