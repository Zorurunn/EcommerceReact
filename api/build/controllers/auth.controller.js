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
exports.signIn = exports.signUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, email, merchName, city, district, khoroo, experience, merchType, password, } = req.body;
        const userExist = yield user_model_1.UserModel.find({ email });
        if (userExist.length) {
            return res.status(401).json({
                message: `${email} и-мэйлтэй хэрэглэгч өмнө бүртгэгдсэн байна`,
            });
        }
        const user = yield user_model_1.UserModel.create({
            userName,
            email,
            merchName,
            address: { city, district, khoroo },
            experience,
            merchType,
            password,
            role: "merchant",
            updatedAt: new Date(),
            createdAt: new Date(),
        });
        return res.json({ message: "Шинэ хэрэглэгч амжилттай үүслээ" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_model_1.UserModel.findOne({ email, password });
        if (!user) {
            return res.status(401).json({
                message: `${email} и-мэйлтэй хэрэглэгч олдсонгүй`,
            });
        }
        const id = user._id;
        const role = user.role;
        const token = jsonwebtoken_1.default.sign({ id, role }, "secret-key");
        return res.json({ user, token, message: "Амжилттай нэвтэрлээ" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.signIn = signIn;
