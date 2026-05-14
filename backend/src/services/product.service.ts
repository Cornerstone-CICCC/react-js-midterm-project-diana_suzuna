import { Product, IProduct } from '../models/products.model';

const getAll = async () => {
  return await Product.find().populate('category');
};

const getById = async (id: string) => {
  return await Product.findById(id);
};

const add = async (productData: Partial<IProduct>) => {
  return await Product.create(productData);
};

const update = async (id: string, data: Partial<IProduct>) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export default {
  getAll,
  getById,
  add,
  update,
  remove,
};
