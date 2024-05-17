"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const productSchema = new mongoose_1.Schema({
    merchId: mongoose_1.default.Schema.Types.ObjectId,
    productName: String,
    productAdditional: String,
    productCode: String,
    productImage: Object,
    productPrice: Number,
    productStocks: Number,
    productCategory: String,
    productSubCategory: String,
    productColor: Object,
    productSize: Object,
    productTag: Object,
    productReactionCount: { type: Number, required: false },
    productSoldQty: { type: Number, required: false },
    salePercent: { type: Number, required: false },
    stars: {
        1: { type: Number, required: false },
        2: { type: Number, required: false },
        3: { type: Number, required: false },
        4: { type: Number, required: false },
        5: { type: Number, required: false },
    },
    avgStars: { type: Number, required: false },
    reviewCount: { type: Number, required: false },
    updatedAt: Date,
    createdAt: Date,
});
exports.ProductModel = (0, mongoose_1.model)("product", productSchema);
