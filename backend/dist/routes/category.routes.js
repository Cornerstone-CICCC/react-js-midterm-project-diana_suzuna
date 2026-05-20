"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../controllers/category.controller"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const categoryRouter = (0, express_1.Router)();
categoryRouter.get('/', category_controller_1.default.getAllCategories);
categoryRouter.get('/:id', category_controller_1.default.getCategoryById);
categoryRouter.post('/', auth_middleware_1.checkAuth, auth_middleware_1.checkAdmin, category_controller_1.default.addCategory);
categoryRouter.put('/:id', auth_middleware_1.checkAuth, auth_middleware_1.checkAdmin, category_controller_1.default.updateCategoryById);
categoryRouter.delete('/:id', auth_middleware_1.checkAuth, auth_middleware_1.checkAdmin, category_controller_1.default.deleteCategoryById);
exports.default = categoryRouter;
