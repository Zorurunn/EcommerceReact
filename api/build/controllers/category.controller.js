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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategories = exports.addCategory = void 0;
const category_model_1 = require("../models/category.model");
const addCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryName } = req.body;
        const newCategory = yield category_model_1.CategoryModel.create({
            categoryName,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        return res.json({ message: "Ангилал амжилттай шинэчлэгдлээ" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.addCategory = addCategory;
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCategories = yield category_model_1.CategoryModel.find({});
        return res.json(allCategories);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getAllCategories = getAllCategories;
