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
<<<<<<< HEAD
=======

export const checkAdmin = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) {
      res.status(403).json({ message: 'Forbbiden user.' });
      return;
    }
    if (req.user.role !== 'admin') {
      res.status(403).json({ message: 'Not an admin!' });
      return;
    }
    next();
  } catch (err) {
    res.status(500).json({ message: 'Server error!' });
  }
};
>>>>>>> backend
