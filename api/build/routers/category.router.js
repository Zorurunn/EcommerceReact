"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const categoryRouter = (0, express_1.Router)();
categoryRouter
    .post("/addCategory", category_controller_1.addCategory)
    .get("/getAllCategories", category_controller_1.getAllCategories);
exports.default = categoryRouter;
