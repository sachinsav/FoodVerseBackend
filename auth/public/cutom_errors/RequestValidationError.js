"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const BaseError_1 = require("./BaseError");
class RequestValidationError extends BaseError_1.BaseError {
    constructor(errors) {
        super('RequestValidationError: Invalid Request');
        this.errors = errors;
        this.statusCode = 400;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map((err) => {
            return { message: err.msg, field: err.type === 'field' ? err.path : undefined };
        });
    }
}
exports.RequestValidationError = RequestValidationError;
