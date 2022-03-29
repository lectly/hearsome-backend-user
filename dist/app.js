"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.port || 5000;
const app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("<h1>Index page</h1>");
});
app.listen(PORT, () => console.log("listening on port: " + PORT));
