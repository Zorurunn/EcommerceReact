import { Router } from "express";
import { addComment, getAllComments } from "../controllers/comment.controller";

const commentRouter = Router();
commentRouter
  .post("/addComment", addComment)
  .get("/getAllComments", getAllComments);

export default commentRouter;
