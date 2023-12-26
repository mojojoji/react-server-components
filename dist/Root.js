"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Root = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function Root(props) {
    return ((0, jsx_runtime_1.jsxs)("html", { children: [(0, jsx_runtime_1.jsx)("head", { children: (0, jsx_runtime_1.jsx)("title", { children: "React server components" }) }), (0, jsx_runtime_1.jsx)("body", { children: (0, jsx_runtime_1.jsx)("div", { id: "root", children: props.children }) })] }));
}
exports.Root = Root;
