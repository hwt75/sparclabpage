"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    NODE_ENV: process.env.NODE_ENV || "development",
    APP_HOST: process.env.APP_HOST || "127.0.0.1",
    APP_PORT: Number(process.env.APP_PORT) || 3000,
};
//# sourceMappingURL=config.js.map