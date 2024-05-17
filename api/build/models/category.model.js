"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    categoryName: String,
    createdAt: Date,
    updatedAt: Date,
});
exports.CategoryModel = (0, mongoose_1.model)("category", categorySchema);
