import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { OrderModel } from "../models/order.model";

export const addOrder: RequestHandler = async (req, res) => {
  try {
    const { cartProduct, deliveryAddress, sumCart, paymentType } = req.body;
    const { authorization } = req.headers;

    if (!authorization) {
      return res.json("Хэрэглэгч нэвтрээгүй байна.");
    }
    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const newOrder = await OrderModel.create({
      userId: id,
      cartProduct,
      deliveryAddress,
      sumCart,
      paymentType,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.json({ message: "Захиалга нэмэгдлээ" });
  } catch (err) {
    res.json(err);
  }
};
export const getMerchOrders: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.json("Хэрэглэгч нэвтрээгүй байна.");
    }
    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const orders = await OrderModel.find({
      cartProduct: {
        $elemMatch: {
          merchId: id,
        },
      },
    });

    const merchOrders = orders.map((item) => ({
      ...item,
      cartProduct: item.cartProduct.filter((el) => el.merchId == id),
    }));

    console.log(merchOrders);
    return res.json(merchOrders);
  } catch (err) {
    res.json(err);
  }
};
