import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  categoryName: String,
  createdAt: Date,
  updatedAt: Date,
});
export const CategoryModel = model("category", categorySchema);
