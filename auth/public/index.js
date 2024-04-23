"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("./middleware/errorHandler");
const signin_1 = require("./routers/signin");
const signup_1 = require("./routers/signup");
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use(express_1.default.json()); // Use built-in JSON middleware for parsing request bodies
// Routes
app.get('/', (req, res) => {
    res.status(200).send({ msg: 'OK3' });
});
app.use("/api/users/signup", signup_1.signupRouter);
app.use('/api/users/signin', signin_1.signinRouter);
//error handler middleware
app.use(errorHandler_1.errorHandler);
app.listen(port, () => {
    console.log(`auth service is running on port http://localhost:${port}`);
});
