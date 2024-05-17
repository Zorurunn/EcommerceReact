import { Router } from "express";
import {
  addProduct,
  addReview,
  deleteProduct,
  getAllProducts,
  getProducts,
  updateReaction,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .post("/addProduct", addProduct)
  .get("/getProducts", getProducts)
  .post("/deleteProduct", deleteProduct)
  .get("/getAllProducts", getAllProducts)
  .post("/updateReaction", updateReaction)
  .post("/addReview", addReview);
export default productRouter;
