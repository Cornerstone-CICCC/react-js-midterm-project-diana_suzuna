import { Request, Response } from 'express';
import authService from '../services/auth.service';
import zxcvbn from 'zxcvbn';

const signup = async (req: Request, res: Response) => {
  const { fullname, email, password } = req.body;

  if (!fullname?.trim() || !email?.trim() || !password?.trim()) {
    res.status(400).json({ message: 'All fields are required.' });
    return;
  }

  const passwordScore = zxcvbn(password).score;
  if (passwordScore <= 2) {
    res.status(400).json({
      message: 'Password is too weak. Try a longer or more complex password.',
    });
    return;
  }

  try {
    const user = await authService.signup({ fullname, email, password });
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await authService.login(email, password);
  if (!result) {
    res.status(401).json({ message: 'Invalid email or password.' });
    return;
  }
  const { token, role, fullname } = result;

  res.cookie('accessToken', token, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
    sameSite: 'lax',
  });

  res.status(200).json({
    message: 'Login successful!',
    role,
    fullname,
  });
};

export default {
  signup,
  login,
};
