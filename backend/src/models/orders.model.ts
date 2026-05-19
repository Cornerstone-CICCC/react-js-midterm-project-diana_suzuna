import mongoose, { Schema, Document } from 'mongoose';
import { Product } from './products.model';

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  products: Array<{
    product: mongoose.Types.ObjectId;
    quantity: number;
  }>;
  total_price: number;
  status: 'pending' | 'completed' | 'canceled';
}

const OrderSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
        quantity: { type: Number, required: true },
      },
    ],
    total_price: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'completed', 'canceled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  },
);

export const Order = mongoose.model<IOrder>('Order', OrderSchema);
