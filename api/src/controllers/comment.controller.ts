import { RequestHandler } from "express";
import { ProductModel } from "../models/product.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { CategoryModel } from "../models/category.model";
import { CommentModel } from "../models/comment.model";

export const addComment: RequestHandler = async (req, res) => {
  try {
    const { productId, star, comment } = req.body;
    const { authorization } = req.headers;

    let userId = null;

    if (authorization) {
      const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;
      userId = id;
    }

    const newComment = await CommentModel.create({
      userId,
      productId,
      comment,
      star,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.json({ message: "Сэтгэгдэл нэмэгдлээ" });
  } catch (err) {
    res.json(err);
  }
};

export const getAllComments: RequestHandler = async (req, res) => {
  try {
    const allComments = await CommentModel.find({}).populate("userId");
    return res.json(allComments);
  } catch (err) {
    res.json(err);
  }
};
