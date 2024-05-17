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
exports.addReview = exports.updateReaction = exports.getAllProducts = exports.deleteProduct = exports.getProducts = exports.addProduct = void 0;
const product_model_1 = require("../models/product.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({
                message: "Бүртгэлгүй хэрэглэгч байна. Та бүртгүүлээд дахин оролдоно уу",
            });
        }
        const { id } = jsonwebtoken_1.default.verify(authorization, "secret-key");
        const { productName, productAdditional, productCode, productImage, productPrice, productStocks, productCategory, productSubCategory, productColor, productSize, productTag, editId, } = req.body;
        if (editId) {
            const editProd = yield product_model_1.ProductModel.findOneAndUpdate({ _id: editId }, {
                productName,
                productAdditional,
                productCode,
                productImage,
                productPrice,
                productStocks,
                productCategory,
                productSubCategory,
                productColor,
                productSize,
                productTag,
                updatedAt: new Date(),
            });
            return res.json({ message: "Бүтээгдэхүүн амжилттай шинэчлэгдлээ" });
        }
        const productExist = yield product_model_1.ProductModel.find({ productCode });
        if (productExist.length) {
            return res.status(401).json({
                message: `${productCode} кодтой бараа өмнө бүртгэгдсэн байна`,
            });
        }
        const product = yield product_model_1.ProductModel.create({
            merchId: id,
            productName,
            productAdditional,
            productCode,
            productImage,
            productPrice,
            productStocks,
            productCategory,
            productSubCategory,
            productColor,
            productSize,
            productTag,
            productSoldQty: 0,
            salePercent: 0,
            productReactionCount: 0,
            updatedAt: new Date(),
            createdAt: new Date(),
        });
        return res.json({ message: "Шинэ бүтээгдэхүүн амжилттай нэмэгдлээ" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.addProduct = addProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json("Unauthorized");
        }
        const { id } = jsonwebtoken_1.default.verify(authorization, "secret-key");
        const products = yield product_model_1.ProductModel.find({ merchId: id });
        return res.json(products);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getProducts = getProducts;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({
                message: "Бүртгэлгүй хэрэглэгч байна. Та бүртгүүлээд дахин оролдоно уу",
            });
        }
        const { id } = jsonwebtoken_1.default.verify(authorization, "secret-key");
        const { productId } = req.body;
        const productExist = yield product_model_1.ProductModel.findOne({ _id: productId });
        if (!productExist) {
            return res.status(401).json({
                message: `Устгах бараа олдсонгүй`,
            });
        }
        const product = yield product_model_1.ProductModel.findByIdAndDelete(productId);
        return res.json({ message: "Бүтээгдэхүүн устгагдлаа" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.deleteProduct = deleteProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProducts = yield product_model_1.ProductModel.find({});
        return res.json(allProducts);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getAllProducts = getAllProducts;
const updateReaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        const { productId } = req.body;
        if (!authorization) {
            return res.status(401).json({
                message: "Бүртгэлгүй хэрэглэгч байна. Та бүртгүүлээд дахин оролдоно уу",
            });
        }
        const { id } = jsonwebtoken_1.default.verify(authorization, "secret-key");
        const editProduct = yield product_model_1.ProductModel.findOne({
            merchId: id,
            _id: productId,
        });
        if (!editProduct) {
            return res.status(401).json({
                message: "Шинэчлэх бараа олдсонгүй.",
            });
        }
        const reaction = editProduct.productReactionCount;
        // return res.json(reaction);
        if (reaction || reaction == 0) {
            const editProd = yield product_model_1.ProductModel.findOneAndUpdate({ _id: productId }, {
                productReactionCount: reaction + 1,
                updatedAt: new Date(),
            });
        }
        return res.json({ message: "Success" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.updateReaction = updateReaction;
const addReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    try {
        const { productId, star } = req.body;
        const editProduct = yield product_model_1.ProductModel.findOne({
            _id: productId,
        });
        if (!editProduct) {
            return res.status(401).json({
                message: "Шинэчлэх бараа олдсонгүй.",
            });
        }
        const prevStars = (_a = editProduct.stars) !== null && _a !== void 0 ? _a : {};
        const prevStar = (_b = prevStars[star]) !== null && _b !== void 0 ? _b : 0;
        yield product_model_1.ProductModel.updateOne({ _id: productId }, {
            stars: Object.assign(Object.assign({}, prevStars), { [star]: prevStar + 1 }),
        });
        const product = yield product_model_1.ProductModel.findOne({ _id: productId });
        if (!product) {
            return res.status(401).json({
                message: "Шинэчлэх бараа олдсонгүй.",
            });
        }
        const pStars = (_c = product.stars) !== null && _c !== void 0 ? _c : {};
        const pStar1 = (_d = pStars[1]) !== null && _d !== void 0 ? _d : 0;
        const pStar2 = (_e = pStars[2]) !== null && _e !== void 0 ? _e : 0;
        const pStar3 = (_f = pStars[3]) !== null && _f !== void 0 ? _f : 0;
        const pStar4 = (_g = pStars[4]) !== null && _g !== void 0 ? _g : 0;
        const pStar5 = (_h = pStars[5]) !== null && _h !== void 0 ? _h : 0;
        const sumReview = pStar1 + pStar2 + pStar3 + pStar4 + pStar5;
        const avgReview = (pStar1 + 2 * pStar2 + 3 * pStar3 + 4 * pStar4 + 5 * pStar5) / sumReview;
        const rCount = (_j = product.reviewCount) !== null && _j !== void 0 ? _j : 0;
        yield product_model_1.ProductModel.updateOne({ _id: productId }, {
            avgStars: avgReview,
            reviewCount: rCount + 1,
        });
        return res.json({ message: "Сэтгэгдэл нэмэгдлээ" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.addReview = addReview;
