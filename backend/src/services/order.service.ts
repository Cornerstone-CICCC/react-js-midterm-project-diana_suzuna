import { Order, IOrder } from '../models/orders.model';
import { Product } from '../models/products.model';

const getAll = async () => {
  return await Order.find().populate('user').populate('products.product');
};

const getById = async (id: string) => {
  return await Order.findById(id).populate('user').populate('products.product');
};

const add = async (orderData: Partial<IOrder>) => {
  let calculatedTotal = 0;
  if (!orderData.products || orderData.products.length === 0) {
    throw new Error('There are no products in the order.');
  }

  for (const item of orderData.products) {
    const product = await Product.findById(item.product);
    if (!product) throw new Error(`Product ${item.product} not found.`);
    calculatedTotal += product.price * item.quantity;
  }

  const finalOrderData = {
    ...orderData,
    total_price: calculatedTotal,
  };
  return await Order.create(finalOrderData);
};

const update = async (id: string, data: Partial<IOrder>) => {
  return await Order.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  return await Order.findByIdAndDelete(id);
};

export default {
  getAll,
  getById,
  add,
  update,
  remove,
};
