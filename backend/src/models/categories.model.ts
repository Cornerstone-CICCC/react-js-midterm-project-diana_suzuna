import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  category_name: string;
}

const CategorySchema: Schema = new Schema(
  {
    category_name: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Category = mongoose.model<ICategory>('Category', CategorySchema);
