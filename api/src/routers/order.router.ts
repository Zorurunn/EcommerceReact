import { Router } from "express";
import { addOrder, getMerchOrders } from "../controllers/order.controller";

const orderRouter = Router();
orderRouter.post("/addOrder", addOrder).get("/getMerchOrders", getMerchOrders);
export default orderRouter;
