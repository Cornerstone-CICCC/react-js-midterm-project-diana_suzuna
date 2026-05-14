import { Request, Response } from 'express';
import categoryService from '../services/category.service';
import { ICategory } from '../models/categories.model';

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.getAll();
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getCategoryById = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  try {
    const category = await categoryService.getById(id);
    if (!category) {
      res.status(404).json({ message: 'Category not found.' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const addCategory = async (req: Request, res: Response) => {
  const { category_name } = req.body;

  try {
    const newCategory = await categoryService.add({
      category_name,
    });
    if (!newCategory) {
      res.status(500).json({ message: 'Unable to add category.' });
      return;
    }
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateCategoryById = async (
  req: Request<{ id: string }, Partial<ICategory>>,
  res: Response,
) => {
  const { id } = req.params;
  const { category_name } = req.body;

  try {
    const updatedCategory = await categoryService.update(id, {
      category_name,
    });
    if (!updatedCategory) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }
    res.status(200).json(updatedCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteCategoryById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const { id } = req.params;
  try {
    const deletedCategory = await categoryService.remove(id);
    if (!deletedCategory) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }
    res.status(200).json(deletedCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
};

export default {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategoryById,
  deleteCategoryById,
};
