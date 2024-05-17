"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const productRouter = (0, express_1.Router)();
productRouter
    .post("/addProduct", product_controller_1.addProduct)
    .get("/getProducts", product_controller_1.getProducts)
    .post("/deleteProduct", product_controller_1.deleteProduct)
    .get("/getAllProducts", product_controller_1.getAllProducts)
    .post("/updateReaction", product_controller_1.updateReaction)
    .post("/addReview", product_controller_1.addReview);
exports.default = productRouter;
