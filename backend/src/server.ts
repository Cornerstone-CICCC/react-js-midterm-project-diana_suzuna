import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Routes

//Fallback 404
app.use((req: Request, res: Response) => {
  res.status(404).send('Invalid route!');
});

const PORT = process.env.BACKEND_PORT;
const URI = process.env.MONGODB_URI;

if (!PORT || !URI) {
  throw new Error('Missing port!');
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
