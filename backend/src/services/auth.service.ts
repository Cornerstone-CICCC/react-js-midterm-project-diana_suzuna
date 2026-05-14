import bcrypt from 'bcrypt';
import userService from './user.service';
import jwt from 'jsonwebtoken';

const signup = async (userData: any) => {
  const existingUser = await userService.getByEmail(userData.email);
  if (existingUser) throw new Error('Email already in use.');

  userData.password = await bcrypt.hash(userData.password, 10);

  return await userService.add(userData);
};

const login = async (email: string, password: string) => {
  const user = await userService.getByEmail(email);
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;

  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });

  return token;
};

export default {
  signup,
  login,
};
