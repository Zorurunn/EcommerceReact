import { Router } from "express";
import {
  addCategory,
  getAllCategories,
} from "../controllers/category.controller";

const categoryRouter = Router();
categoryRouter
  .post("/addCategory", addCategory)
  .get("/getAllCategories", getAllCategories);
export default categoryRouter;
