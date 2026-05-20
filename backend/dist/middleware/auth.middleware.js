"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdmin = exports.checkAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_TOKEN = process.env.JWT_SECRET;
const checkAuth = (req, res, next) => {
    var _a;
    if (!SECRET_TOKEN) {
        res.status(500).json({ message: 'Unable to verify acces token' });
        return;
    }
    const accessToken = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.accessToken;
    if (!accessToken) {
        res.status(401).json({ message: 'Unauthorized access!' });
        return;
    }
    try {
        req.user = jsonwebtoken_1.default.verify(accessToken, SECRET_TOKEN);
        next();
    }
    catch (err) {
        res.status(401).json({ message: 'Missing access token!' });
    }
};
exports.checkAuth = checkAuth;
const checkAdmin = (req, res, next) => {
    try {
        if (!req.user) {
            res.status(403).json({ message: 'Forbbiden user.' });
            return;
        }
        if (req.user.role !== 'admin') {
            res.status(403).json({ message: 'Not an admin!' });
            return;
        }
        next();
    }
    catch (err) {
        res.status(500).json({ message: 'Server error!' });
    }
};
exports.checkAdmin = checkAdmin;
