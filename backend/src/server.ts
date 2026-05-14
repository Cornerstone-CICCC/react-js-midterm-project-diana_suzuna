import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './routes/auth.routes';
import userRouter from './routes/user.routes';
import productRouter from './routes/product.routes';
import orderRouter from './routes/order.routes';
import cookieParser from 'cookie-parser';

const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Routes
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

//Fallback 404
app.use((req: Request, res: Response) => {
  res.status(404).send('Invalid route!');
});

const PORT = process.env.BACKEND_PORT;
const URI = process.env.MONGODB_URI;

if (!PORT || !URI) {
  throw new Error('Missing backend port!');
}
mongoose
  .connect(URI, { dbName: 'pet_party' })
  .then(() => {
    console.log('Conected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    throw new Error(err);
  });
