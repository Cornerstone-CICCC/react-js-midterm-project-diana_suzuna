"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const userRouter = (0, express_1.Router)();
userRouter.get('/', auth_middleware_1.checkAuth, auth_middleware_1.checkAdmin, user_controller_1.default.getAllUsers);
userRouter.get('/:id', auth_middleware_1.checkAuth, user_controller_1.default.getUserById);
userRouter.post('/', auth_middleware_1.checkAuth, auth_middleware_1.checkAdmin, user_controller_1.default.addUser);
userRouter.put('/:id', auth_middleware_1.checkAuth, user_controller_1.default.updateUserById);
userRouter.delete('/:id', auth_middleware_1.checkAuth, auth_middleware_1.checkAdmin, user_controller_1.default.deleteUserById);
exports.default = userRouter;
