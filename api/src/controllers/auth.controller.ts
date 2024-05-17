import { RequestHandler } from "express";

import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";

export const signUp: RequestHandler = async (req, res) => {
  try {
    const {
      userName,
      email,
      merchName,
      city,
      district,
      khoroo,
      experience,
      merchType,
      password,
    } = req.body;

    const userExist = await UserModel.find({ email });

    if (userExist.length) {
      return res.status(401).json({
        message: `${email} и-мэйлтэй хэрэглэгч өмнө бүртгэгдсэн байна`,
      });
    }

    const user = await UserModel.create({
      userName,
      email,
      merchName,
      address: { city, district, khoroo },
      experience,
      merchType,
      password,
      role: "merchant",
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return res.json({ message: "Шинэ хэрэглэгч амжилттай үүслээ" });
  } catch (err) {
    res.json(err);
  }
};

export const signIn: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email, password });

    if (!user) {
      return res.status(401).json({
        message: `${email} и-мэйлтэй хэрэглэгч олдсонгүй`,
      });
    }

    const id = user._id;
    const role = user.role;
    const token = jwt.sign({ id, role }, "secret-key");

    return res.json({ user, token, message: "Амжилттай нэвтэрлээ" });
  } catch (err) {
    res.json(err);
  }
};
