import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import productRouter from "./routers/product.router";
import userRouter from "./routers/user.router";
import categoryRouter from "./routers/category.router";
import commentRouter from "./routers/comment.router";
import orderRouter from "./routers/order.router";

const app = express();
app.use(cors());
app.use(json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/comment", commentRouter);
app.use("/order", orderRouter);

export default app;
