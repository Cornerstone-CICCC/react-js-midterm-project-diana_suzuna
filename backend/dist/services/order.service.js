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
Object.defineProperty(exports, "__esModule", { value: true });
const orders_model_1 = require("../models/orders.model");
const products_model_1 = require("../models/products.model");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield orders_model_1.Order.find().populate('user').populate('products.product');
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield orders_model_1.Order.findById(id).populate('user').populate('products.product');
});
const add = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    let calculatedTotal = 0;
    if (!orderData.products || orderData.products.length === 0) {
        throw new Error('There are no products in the order.');
    }
    for (const item of orderData.products) {
        const product = yield products_model_1.Product.findById(item.product);
        if (!product)
            throw new Error(`Product ${item.product} not found.`);
        calculatedTotal += product.price * item.quantity;
    }
    const finalOrderData = Object.assign(Object.assign({}, orderData), { total_price: calculatedTotal });
    return yield orders_model_1.Order.create(finalOrderData);
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield orders_model_1.Order.findByIdAndUpdate(id, data, { new: true });
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield orders_model_1.Order.findByIdAndDelete(id);
});
exports.default = {
    getAll,
    getById,
    add,
    update,
    remove,
};
