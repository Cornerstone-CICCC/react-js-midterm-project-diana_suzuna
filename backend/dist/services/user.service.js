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
const users_model_1 = require("../models/users.model");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_model_1.User.find();
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_model_1.User.findById(id);
});
const getByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_model_1.User.findOne({ email });
});
const add = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_model_1.User.create(userData);
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_model_1.User.findByIdAndUpdate(id, data, { new: true });
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_model_1.User.findByIdAndDelete(id);
});
exports.default = {
    getAll,
    getByEmail,
    getById,
    add,
    update,
    remove,
};
