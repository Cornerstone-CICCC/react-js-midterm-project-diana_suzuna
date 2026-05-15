import { Request, Response } from "express";
import authService from "../services/auth.service";

const signup = async (req: Request, res: Response) => {
  const { fullname, email, password } = req.body;

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
    res.status(401).json({ message: "Invalid email or password." });
    return;
  }
  const { token, role } = result;

  res.cookie("accesToken", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
  });

  res.status(200).json({
    message: "Login successfull!",
    role,
  });
};

export default {
  signup,
  login,
};
