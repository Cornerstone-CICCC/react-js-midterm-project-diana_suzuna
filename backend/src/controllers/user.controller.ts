import { Request, Response } from 'express';
import userService from '../services/user.service';
import { IUser } from '../models/users.model';

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getUserById = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  try {
    const user = await userService.getById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const addUser = async (req: Request, res: Response) => {
  const { fullname, email, role } = req.body;

  try {
    const newUser = await userService.add({ fullname, email, role });
    if (!newUser) {
      res.status(500).json({ message: 'Unable to add user' });
      return;
    }
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateUserById = async (
  req: Request<{ id: string }, Partial<IUser>>,
  res: Response,
) => {
  const { id } = req.params;
  const { fullname, email, role } = req.body;

  try {
    const updatedUser = await userService.update(id, {
      fullname,
      email,
      role,
    });
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteUserById = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  try {
    const deletedUser = await userService.remove(id);
    if (!deletedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(deletedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
};

export default {
  getAllUsers,
  getUserById,
  addUser,
  updateUserById,
  deleteUserById,
};
