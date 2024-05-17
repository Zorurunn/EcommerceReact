import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../models/user.model";

//return All user list
export const getUsers: RequestHandler = async (req, res) => {
  const user = await UserModel.find({});
  return res.json(user);
};

//return one user
export const getUser: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: "Unauthorized1" });
    }
    const { id: userId } = jwt.verify(
      authorization,
      "secret-key"
    ) as JwtPayload;

    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return res.status(401).json({ message: "Хэрэглэгч олдсонгүй" });
    }

    return res.json(user);
  } catch (err) {
    res.json(err);
  }
};
