import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
  status: String,
  deliveryAddress: {
    phone: String,
    firstName: String,
    latName: String,
    address: String,
    extra: String,
  },
  cartProduct: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      merchId: mongoose.Schema.Types.ObjectId,
      productName: String,
      productPrice: Number,
      productImage: [String],
      productColor: [String],
      orderQty: Number,
    },
  ],
  sumCart: Number,
  paymentType: String,
  createdAt: Date,
  updatedAt: Date,
});
export const OrderModel = model("order", orderSchema);
