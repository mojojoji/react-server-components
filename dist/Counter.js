"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Counter() {
    const [counter, setCounter] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: counter }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setCounter((count) => count + 1), children: "Increment" })] }));
}
exports.Counter = Counter;
