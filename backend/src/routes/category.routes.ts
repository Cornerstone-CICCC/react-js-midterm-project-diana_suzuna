import { Router } from 'express';
import categoryController from '../controllers/category.controller';
import { checkAuth, checkAdmin } from '../middleware/auth.middleware';

const categoryRouter = Router();

categoryRouter.get('/', categoryController.getAllCategories);
categoryRouter.get('/:id', categoryController.getCategoryById);
categoryRouter.post('/', checkAuth, checkAdmin, categoryController.addCategory);
categoryRouter.put(
  '/:id',
  checkAuth,
  checkAdmin,
  categoryController.updateCategoryById,
);
categoryRouter.delete(
  '/:id',
  checkAuth,
  checkAdmin,
  categoryController.deleteCategoryById,
);

export default categoryRouter;
