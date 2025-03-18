import express, { Request, Response } from 'express';
import router from './routes';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app = express();

app.use(express.json());

//* application related routes
app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to my portfolio');
});

//* global error handler
app.use(globalErrorHandler)

export default app;