import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";
import { ajaxConfig } from "./axios.config";

//配置全局顶部进度条，捕获axios请求

ajaxConfig();

ReactDOM.render(
  // <App />,
  <Router></Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
