import { Request, Response } from 'express';
import productService from '../services/product.service';
import { IProduct } from '../models/products.model';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const product = await productService.getAll();
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getProductById = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  try {
    const product = await productService.getById(id);
    if (!product) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const addProduct = async (req: Request, res: Response) => {
  const {
    item_name,
    stock_quantity,
    price,
    image,
    description,
    pet_type,
    category,
  } = req.body;

  try {
    const newProduct = await productService.add({
      item_name,
      stock_quantity,
      price,
      image,
      description,
      pet_type,
      category,
    });
    if (!newProduct) {
      res.status(500).json({ message: 'Unable to add product.' });
      return;
    }
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateProductById = async (
  req: Request<{ id: string }, Partial<IProduct>>,
  res: Response,
) => {
  const { id } = req.params;
  const {
    item_name,
    stock_quantity,
    price,
    image,
    description,
    pet_type,
    category,
  } = req.body;

  try {
    const updatedProduct = await productService.update(id, {
      item_name,
      stock_quantity,
      price,
      image,
      description,
      pet_type,
      category,
    });
    if (!updatedProduct) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteProductById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const { id } = req.params;
  try {
    const deletedProduct = await productService.remove(id);
    if (!deletedProduct) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }
    res.status(200).json(deletedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
};

export default {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
};
