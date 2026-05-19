import { Request, Response } from 'express';
import orderService from '../services/order.service';
import { IOrder } from '../models/orders.model';

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const order = await orderService.getAll();
    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getOrderById = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  try {
    const order = await orderService.getById(id);
    if (!order) {
      res.status(404).json({ message: 'Order not found.' });
      return;
    }
    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const addOrder = async (req: Request, res: Response) => {
  const { user, products, total_price, status } = req.body;

  try {
    const newOrder = await orderService.add({
      user,
      products,
      total_price,
      status,
    });
    if (!newOrder) {
      res.status(500).json({ message: 'Unable to add order.' });
      return;
    }
    res.status(201).json(newOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateOrderById = async (
  req: Request<{ id: string }, Partial<IOrder>>,
  res: Response,
) => {
  const { id } = req.params;
  const { user, products, total_price, status } = req.body;

  try {
    const updatedOrder = await orderService.update(id, {
      user,
      products,
      total_price,
      status,
    });
    if (!updatedOrder) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }
    res.status(200).json(updatedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteOrderById = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  try {
    const deletedOrder = await orderService.remove(id);
    if (!deletedOrder) {
      res.status(404).json({ message: 'Order not found.' });
      return;
    }
    res.status(200).json(deletedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
};

export default {
  getAllOrders,
  getOrderById,
  addOrder,
  updateOrderById,
  deleteOrderById,
};
