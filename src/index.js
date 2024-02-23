import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "normalize.css/normalize.css";

// 引入所有的svg文件
// require.context的参数不能使用变量，只能固定值
const req = require.context("./assets/icon", true, /\.svg$/);

const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
