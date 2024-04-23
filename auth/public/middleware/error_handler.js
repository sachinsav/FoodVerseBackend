"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const BaseError_1 = require("../cutom_errors/BaseError");
const errorHandler = (err, req, res, next) => {
    if (err instanceof BaseError_1.BaseError) {
        res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    else {
        res.status(400).send({ errors: [{ message: "Something went wrong" }] });
    }
};
exports.errorHandler = errorHandler;
