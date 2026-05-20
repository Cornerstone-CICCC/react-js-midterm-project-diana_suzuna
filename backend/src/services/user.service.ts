import { User, IUser } from '../models/users.model';

const getAll = async () => {
  return await User.find();
};

const getById = async (id: string) => {
  return await User.findById(id);
};

const getByEmail = async (email: string) => {
  return await User.findOne({ email });
};

const add = async (userData: Partial<IUser>) => {
  return await User.create(userData);
};

const update = async (id: string, data: Partial<IUser>) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  return await User.findByIdAndDelete(id);
};

export default {
  getAll,
  getByEmail,
  getById,
  add,
  update,
  remove,
};
