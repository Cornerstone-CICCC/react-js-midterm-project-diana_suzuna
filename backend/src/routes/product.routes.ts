import { Router } from 'express';
import productController from '../controllers/product.controller';
import { checkAdmin, checkAuth } from '../middleware/auth.middleware';

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.post('/', checkAuth, checkAdmin, productController.addProduct);
productRouter.put(
  '/:id',
  checkAuth,
  checkAdmin,
  productController.updateProductById,
);
productRouter.delete(
  '/:id',
  checkAuth,
  checkAdmin,
  productController.deleteProductById,
);

export default productRouter;
