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
const category_service_1 = __importDefault(require("../services/category.service"));
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_service_1.default.getAll();
        res.status(200).json(category);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const category = yield category_service_1.default.getById(id);
        if (!category) {
            res.status(404).json({ message: 'Category not found.' });
            return;
        }
        res.status(200).json(category);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
const addCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category_name } = req.body;
    try {
        const newCategory = yield category_service_1.default.add({
            category_name,
        });
        if (!newCategory) {
            res.status(500).json({ message: 'Unable to add category.' });
            return;
        }
        res.status(201).json(newCategory);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
const updateCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { category_name } = req.body;
    try {
        const updatedCategory = yield category_service_1.default.update(id, {
            category_name,
        });
        if (!updatedCategory) {
            res.status(404).json({ message: 'Product not found.' });
            return;
        }
        res.status(200).json(updatedCategory);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
const deleteCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedCategory = yield category_service_1.default.remove(id);
        if (!deletedCategory) {
            res.status(404).json({ message: 'Product not found.' });
            return;
        }
        res.status(200).json(deletedCategory);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }
});
exports.default = {
    getAllCategories,
    getCategoryById,
    addCategory,
    updateCategoryById,
    deleteCategoryById,
};
