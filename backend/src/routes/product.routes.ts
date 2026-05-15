import { Router } from 'express';
import productController from '../controllers/product.controller';
<<<<<<< HEAD
=======
import { checkAdmin, checkAuth } from '../middleware/auth.middleware';
>>>>>>> backend

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductById);
<<<<<<< HEAD
productRouter.post('/', productController.addProduct);
productRouter.put('/:id', productController.updateProductById);
productRouter.delete('/:id', productController.deleteProductById);
=======
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
>>>>>>> backend

export default productRouter;
