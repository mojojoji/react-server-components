"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Counter_1 = require("./Counter");
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Hello world" }), (0, jsx_runtime_1.jsx)("a", { href: "#", children: "Test link" }), (0, jsx_runtime_1.jsx)(Counter_1.Counter, {})] }));
}
exports.App = App;
