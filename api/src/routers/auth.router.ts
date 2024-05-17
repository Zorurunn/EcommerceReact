import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/signUp", signUp).post("/signIn", signIn);
export default authRouter;
