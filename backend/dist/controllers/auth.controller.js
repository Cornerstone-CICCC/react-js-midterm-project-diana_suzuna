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
const auth_service_1 = __importDefault(require("../services/auth.service"));
const zxcvbn_1 = __importDefault(require("zxcvbn"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullname, email, password } = req.body;
    if (!(fullname === null || fullname === void 0 ? void 0 : fullname.trim()) || !(email === null || email === void 0 ? void 0 : email.trim()) || !(password === null || password === void 0 ? void 0 : password.trim())) {
        res.status(400).json({ message: 'All fields are required.' });
        return;
    }
    const passwordScore = (0, zxcvbn_1.default)(password).score;
    if (passwordScore <= 2) {
        res.status(400).json({
            message: 'Password is too weak. Try a longer or more complex password.',
        });
        return;
    }
    try {
        const user = yield auth_service_1.default.signup({ fullname, email, password });
        res.status(201).json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const result = yield auth_service_1.default.login(email, password);
    if (!result) {
        res.status(401).json({ message: 'Invalid email or password.' });
        return;
    }
    const { token, role, fullname } = result;
    res.cookie('accessToken', token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
        sameSite: 'lax',
    });
    res.status(200).json({
        message: 'Login successful!',
        role,
        fullname,
    });
});
exports.default = {
    signup,
    login,
};
