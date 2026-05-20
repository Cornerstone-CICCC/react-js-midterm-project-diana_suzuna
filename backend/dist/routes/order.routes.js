"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = __importDefault(require("../controllers/order.controller"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const orderRouter = (0, express_1.Router)();
orderRouter.get('/', auth_middleware_1.checkAuth, auth_middleware_1.checkAdmin, order_controller_1.default.getAllOrders);
orderRouter.get('/:id', auth_middleware_1.checkAuth, order_controller_1.default.getOrderById);
orderRouter.post('/', auth_middleware_1.checkAuth, order_controller_1.default.addOrder);
orderRouter.put('/:id', auth_middleware_1.checkAuth, auth_middleware_1.checkAdmin, order_controller_1.default.updateOrderById);
orderRouter.delete('/:id', auth_middleware_1.checkAuth, auth_middleware_1.checkAdmin, order_controller_1.default.deleteOrderById);
exports.default = orderRouter;
