"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./config");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../about-us/sparc/index.html"));
});
app.use((0, cors_1.default)());
// Middleware to parse JSON
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.resolve(__dirname, "../about-us/fmecg")));
app.use(express_1.default.static(path_1.default.resolve(__dirname, "../about-us/ecsa")));
app.get("/project/fmecg", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../about-us/fmecg/index.html"));
});
app.get("/project/ecsa", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../about-us/ecsa/index.html"));
});
app.get("/test", (req, res) => {
    res.send("Hello, TypeScript with Express!");
});
// catch exception and log
app.use((err, req, res, next) => {
    if (err.stack) {
        console.log(`node server error. \nTime: ${new Date()} \nPlease refer to the attached message: \nError code: ${err.code} \nError message: ${err.message} \nError stack: ${err.stack} \n`);
        err.stack = "";
        err.message = "internal server error";
        next(err);
    }
    else {
        next();
    }
});
app.listen(config_1.config.APP_PORT, () => {
    console.log(`Server is running at http://${config_1.config.APP_HOST}:${config_1.config.APP_PORT}`);
});
//# sourceMappingURL=index.js.map