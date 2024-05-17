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
exports.getMerchOrders = exports.addOrder = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const order_model_1 = require("../models/order.model");
const addOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cartProduct, deliveryAddress, sumCart, paymentType } = req.body;
        const { authorization } = req.headers;
        if (!authorization) {
            return res.json("Хэрэглэгч нэвтрээгүй байна.");
        }
        const { id } = jsonwebtoken_1.default.verify(authorization, "secret-key");
        const newOrder = yield order_model_1.OrderModel.create({
            userId: id,
            cartProduct,
            deliveryAddress,
            sumCart,
            paymentType,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        return res.json({ message: "Захиалга нэмэгдлээ" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.addOrder = addOrder;
const getMerchOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.json("Хэрэглэгч нэвтрээгүй байна.");
        }
        const { id } = jsonwebtoken_1.default.verify(authorization, "secret-key");
        const orders = yield order_model_1.OrderModel.find({
            cartProduct: {
                $elemMatch: {
                    merchId: id,
                },
            },
        });
        const merchOrders = orders.map((item) => (Object.assign(Object.assign({}, item), { cartProduct: item.cartProduct.filter((el) => el.merchId == id) })));
        console.log(merchOrders);
        return res.json(merchOrders);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getMerchOrders = getMerchOrders;
