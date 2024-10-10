"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const PORT = Number(process.env.PORT) || 8080;
const HOST = "0.0.0.0";
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
