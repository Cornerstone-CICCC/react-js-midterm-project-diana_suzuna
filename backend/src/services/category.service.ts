import { Category, ICategory } from '../models/categories.model';

const getAll = async () => {
  return await Category.find();
};

const getById = async (id: string) => {
  return await Category.findById(id);
};

const add = async (categoryData: Partial<ICategory>) => {
  return await Category.create(categoryData);
};

const update = async (id: string, data: Partial<ICategory>) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};

export default {
  getAll,
  getById,
  add,
  update,
  remove,
};
