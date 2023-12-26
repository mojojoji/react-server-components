"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const server_1 = require("react-dom/server");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const App_1 = require("./App");
const Root_1 = require("./Root");
app.use("/public", express_1.default.static("public"));
app.get("/", (req, res) => {
    const { pipe } = (0, server_1.renderToPipeableStream)((0, jsx_runtime_1.jsx)(Root_1.Root, { children: (0, jsx_runtime_1.jsx)(App_1.App, {}) }), {
        bootstrapScripts: ["public/client.js"],
        onShellReady() {
            res.setHeader("content-type", "text/html");
            pipe(res);
        },
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
