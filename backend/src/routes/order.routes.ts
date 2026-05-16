import { Router } from 'express';
import orderController from '../controllers/order.controller';
import { checkAdmin, checkAuth } from '../middleware/auth.middleware';

const orderRouter = Router();

orderRouter.get('/', checkAuth, checkAdmin, orderController.getAllOrders);
orderRouter.get('/:id', checkAuth, orderController.getOrderById);
orderRouter.post('/', checkAuth, orderController.addOrder);
orderRouter.put('/:id', checkAuth, checkAdmin, orderController.updateOrderById);
orderRouter.delete(
  '/:id',
  checkAuth,
  checkAdmin,
  orderController.deleteOrderById,
);

export default orderRouter;
