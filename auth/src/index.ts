import express, { NextFunction, Request, Response } from 'express';
import { errorHandler } from './middleware/errorHandler';
import { signinRouter } from './routers/signin';
import { signupRouter } from './routers/signup';


const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Use built-in JSON middleware for parsing request bodies



// Routes
app.get('/', (req: Request, res: Response) => {
    res.status(200).send({ msg: 'OK' });
});

app.use("/api/users/signup", signupRouter)
app.use('/api/users/signin', signinRouter)


//error handler middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`auth service is running on port http://localhost:${port}`);
});
