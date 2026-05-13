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
const app = (0, express_1.default)();
//Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Routes
//Fallback 404
app.use((req, res) => {
    res.status(404).send('Invalid route!');
});
const PORT = process.env.BACKEND_PORT;
const URI = process.env.MONGODB_URI;
if (!PORT || !URI) {
    throw new Error('Missing port!');
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
