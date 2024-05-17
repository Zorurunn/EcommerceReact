import { RequestHandler } from "express";
import { ProductModel } from "../models/product.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { CategoryModel } from "../models/category.model";

export const addCategory: RequestHandler = async (req, res) => {
  try {
    const { categoryName } = req.body;

    const newCategory = await CategoryModel.create({
      categoryName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.json({ message: "Ангилал амжилттай шинэчлэгдлээ" });
  } catch (err) {
    res.json(err);
  }
};

export const getAllCategories: RequestHandler = async (req, res) => {
  try {
    const allCategories = await CategoryModel.find({});
    return res.json(allCategories);
  } catch (err) {
    res.json(err);
  }
};
