import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  item_name: string;
  stock_quantity: number;
  price: number;
  image: string;
  category: mongoose.Types.ObjectId | any;
}

const ProductSchema: Schema = new Schema(
  {
    item_name: { type: String, required: true },
    stock_quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
  },
  {
    timestamps: true,
  },
);

export const Product = mongoose.model<IProduct>('Product', ProductSchema);
