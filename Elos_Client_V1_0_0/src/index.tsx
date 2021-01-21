import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import axios from "axios";

//配置全局顶部进度条，捕获axios请求

NProgress.configure({
  minimum: 0.1,
  showSpinner: false,
});

axios.defaults.baseURL = "http://localhost:3090";
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
// axios.defaults.withCredentials = true; //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
// axios.defaults.headers.common["Authorization"] = ""; // 设置请求头为 Authorization
axios.interceptors.request.use(
  function (config) {
    // 出现进度条
    NProgress.start();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 在 response 拦截器中，隐藏进度条 NProgress.done()
axios.interceptors.response.use((config) => {
  NProgress.done();
  return config;
});

ReactDOM.render(
  // <App />,
  <Router></Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
