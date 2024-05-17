"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_controller_1 = require("../controllers/comment.controller");
const commentRouter = (0, express_1.Router)();
commentRouter
    .post("/addComment", comment_controller_1.addComment)
    .get("/getAllComments", comment_controller_1.getAllComments);
exports.default = commentRouter;
