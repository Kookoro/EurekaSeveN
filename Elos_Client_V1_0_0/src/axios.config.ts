import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export const ajaxConfig = () => {
  NProgress.configure({
    minimum: 0.1,
    showSpinner: false,
  });

  //后端地址
  axios.defaults.baseURL = "http://127.0.0.1:3090";

  axios.defaults.headers.post["Content-Type"] =
    "application/json; charset=utf-8";
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
      NProgress.done();
      return Promise.reject(error);
    }
  );

  // 在 response 拦截器中，隐藏进度条 NProgress.done()
  axios.interceptors.response.use((config) => {
    NProgress.done();
    return config;
  });
};
