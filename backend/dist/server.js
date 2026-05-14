"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const order_routes_1 = __importDefault(require("./routes/order.routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
//Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
//Routes
app.use('/auth', auth_routes_1.default);
app.use('/users', user_routes_1.default);
app.use('/products', product_routes_1.default);
app.use('/orders', order_routes_1.default);
//Fallback 404
app.use((req, res) => {
    res.status(404).send('Invalid route!');
});
const PORT = process.env.BACKEND_PORT;
const URI = process.env.MONGODB_URI;
if (!PORT || !URI) {
    throw new Error('Missing backend port!');
}
mongoose_1.default
    .connect(URI, { dbName: 'pet_party' })
    .then(() => {
    console.log('Conected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    throw new Error(err);
});
