import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthRequest } from '../types/auth.types';

const SECRET_TOKEN = process.env.JWT_SECRET;

export const checkAuth = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  if (!SECRET_TOKEN) {
    res.status(500).json({ message: 'Unable to verify acces token' });
    return;
  }

  const accessToken = req.cookies?.accesToken;

  if (!accessToken) {
    res.status(401).json({ message: 'Unauthorized access!' });
    return;
  }

  try {
    req.user = jwt.verify(accessToken, SECRET_TOKEN) as AuthRequest['user'];
    next();
  } catch (err) {
    res.status(401).json({ message: 'Missing access token!' });
  }
};
