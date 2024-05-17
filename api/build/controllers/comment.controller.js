"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllComments = exports.addComment = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const comment_model_1 = require("../models/comment.model");
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, star, comment } = req.body;
        const { authorization } = req.headers;
        let userId = null;
        if (authorization) {
            const { id } = jsonwebtoken_1.default.verify(authorization, "secret-key");
            userId = id;
        }
        const newComment = yield comment_model_1.CommentModel.create({
            userId,
            productId,
            comment,
            star,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        return res.json({ message: "Сэтгэгдэл нэмэгдлээ" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.addComment = addComment;
const getAllComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allComments = yield comment_model_1.CommentModel.find({}).populate("userId");
        return res.json(allComments);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getAllComments = getAllComments;
