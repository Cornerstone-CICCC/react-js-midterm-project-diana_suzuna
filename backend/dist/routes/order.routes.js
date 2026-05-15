"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = __importDefault(require("../controllers/order.controller"));
const orderRouter = (0, express_1.Router)();
orderRouter.get('/', order_controller_1.default.getAllOrders);
orderRouter.get('/:id', order_controller_1.default.getOrderById);
orderRouter.post('/', order_controller_1.default.addOrder);
orderRouter.put('/:id', order_controller_1.default.updateOrderById);
orderRouter.delete('/:id', order_controller_1.default.deleteOrderById);
exports.default = orderRouter;
