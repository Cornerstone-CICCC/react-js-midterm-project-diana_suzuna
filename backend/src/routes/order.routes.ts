import { Router } from 'express';
import orderController from '../controllers/order.controller';

const orderRouter = Router();

orderRouter.get('/', orderController.getAllOrders);
orderRouter.get('/:id', orderController.getOrderById);
orderRouter.post('/', orderController.addOrder);
orderRouter.put('/:id', orderController.updateOrderById);
orderRouter.delete('/:id', orderController.deleteOrderById);

export default orderRouter;
