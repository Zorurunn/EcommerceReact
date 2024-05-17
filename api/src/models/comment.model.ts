import mongoose, { Schema, model } from "mongoose";

const commentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: false,
  },
  productId: mongoose.Schema.Types.ObjectId,
  comment: String,
  star: Number,
  createdAt: Date,
  updatedAt: Date,
});
export const CommentModel = model("comment", commentSchema);
