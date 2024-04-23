"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const BaseError_1 = require("../cutom_errors/BaseError");
const errorHandler = (err, req, res, next) => {
    console.log("in the error handler");
    if (err instanceof BaseError_1.BaseError) {
        return res.status(err.statusCode).json({ errors: err.serializeErrors() });
    }
    else {
        return res.status(400).json({ errors: [{ message: "Something went wrong" }] });
    }
};
exports.errorHandler = errorHandler;
