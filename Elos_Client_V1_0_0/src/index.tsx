import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Router from "./Router";
import * as serviceWorker from "./serviceWorker";
import { ajaxConfig } from "./axios.config";
import Index from "./components/Homepage";

import "dayjs/locale/zh-cn";
// dayjs.locale('zh-cn')

//配置全局顶部进度条，捕获axios请求
import { BrowserRouter } from "react-router-dom";
ajaxConfig();

ReactDOM.render(
  // <App />,
  <BrowserRouter>
    <Index></Index>
  </BrowserRouter>,

  document.getElementById("root")
);
serviceWorker.unregister();
