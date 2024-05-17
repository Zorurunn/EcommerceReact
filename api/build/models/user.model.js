"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userName: String,
    email: String,
    merchName: String,
    address: { city: String, district: String, khoroo: String },
    experience: String,
    merchType: String,
    password: String,
    role: { type: String, required: false },
    createdAt: Date,
    updatedAt: Date,
});
exports.UserModel = (0, mongoose_1.model)("user", userSchema);
