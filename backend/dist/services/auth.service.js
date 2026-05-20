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
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_service_1 = __importDefault(require("./user.service"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signup = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield user_service_1.default.getByEmail(userData.email);
    if (existingUser)
        throw new Error('Email already in use.');
    userData.password = yield bcrypt_1.default.hash(userData.password, 10);
    return yield user_service_1.default.add(userData);
});
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.default.getByEmail(email);
    if (!user)
        return null;
    const isMatch = yield bcrypt_1.default.compare(password, user.password);
    if (!isMatch)
        return null;
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
    };
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return { token, role: user.role, fullname: user.fullname };
});
exports.default = {
    signup,
    login,
};
