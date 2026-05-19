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
const categories_model_1 = require("../models/categories.model");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield categories_model_1.Category.find();
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield categories_model_1.Category.findById(id);
});
const add = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield categories_model_1.Category.create(categoryData);
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield categories_model_1.Category.findByIdAndUpdate(id, data, { new: true });
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield categories_model_1.Category.findByIdAndDelete(id);
});
exports.default = {
    getAll,
    getById,
    add,
    update,
    remove,
};
