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
const order_service_1 = __importDefault(require("../services/order.service"));
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_service_1.default.getAll();
        res.status(200).json(order);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const order = yield order_service_1.default.getById(id);
        if (!order) {
            res.status(404).json({ message: 'Order not found.' });
            return;
        }
        res.status(200).json(order);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
const addOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, products, total_price, status } = req.body;
    try {
        const newOrder = yield order_service_1.default.add({
            user,
            products,
            total_price,
            status,
        });
        if (!newOrder) {
            res.status(500).json({ message: 'Unable to add order.' });
            return;
        }
        res.status(201).json(newOrder);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
const updateOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { user, products, total_price, status } = req.body;
    try {
        const updatedOrder = yield order_service_1.default.update(id, {
            user,
            products,
            total_price,
            status,
        });
        if (!updatedOrder) {
            res.status(404).json({ message: 'Product not found.' });
            return;
        }
        res.status(200).json(updatedOrder);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
const deleteOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedOrder = yield order_service_1.default.remove(id);
        if (!deletedOrder) {
            res.status(404).json({ message: 'Order not found.' });
            return;
        }
        res.status(200).json(deletedOrder);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }
});
exports.default = {
    getAllOrders,
    getOrderById,
    addOrder,
    updateOrderById,
    deleteOrderById,
};
