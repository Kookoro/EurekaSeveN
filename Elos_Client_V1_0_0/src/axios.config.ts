import axios, { AxiosRequestConfig } from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import * as appConfig from "./app.config.json";
const DEBUG = process.env.NODE_ENV === "development";
const NotCancleUrl = [""]; // 不取消重复请求的url列表
const pendingRequestArray: any = []; // 声明一个数组用于存储每个请求的取消函数和请求标识
const { CancelToken } = axios;

interface AxiosRequestConfigDIY extends AxiosRequestConfig {
  duration?: number;
  time?: {
    startTime: number;
    endTime?: number;
  };
}
// interface AxiosResponseDIY extends AxiosResponse {
//   time?: {
//     startTime: number;
//     endTime: number;
//   };
//   config?:{}
//   duration?: number;
// }

export const ajaxConfig = () => {
  // NProgress.configure({
  //   minimum: 0.1,
  //   showSpinner: false,
  // });
  NProgress.configure(appConfig.nprogress_config);
  const showNprogress = () => {
    NProgress.start();
  };
  const closeNprogress = () => {
    NProgress.done();
  };
  const removePending = (config) => {
    for (const index in pendingRequestArray) {
      const key = `${config.url}&${config.method}`;
      if (
        pendingRequestArray[index].key === key &&
        !NotCancleUrl.includes(config.url)
      ) {
        // 当当前请求在数组中存在时执行函数体

        pendingRequestArray[index].cancel(); // 执行取消操作
        pendingRequestArray.splice(index, 1); // 把这条记录从数组中移除
      }
    }
  };

  //后端地址
  axios.defaults.baseURL = appConfig.default_url;
  axios.defaults.headers.post["Content-Type"] =
    "application/json; charset=utf-8";
  axios.interceptors.request.use(
    function (config: AxiosRequestConfigDIY) {
      // 出现进度条
      if (DEBUG) {
        console.info("✉️ ", config);
      }

      removePending(config); // 在一个发送请求前执行一下取消操作'

      config.cancelToken = new CancelToken((c) => {
        // 这里的请求标识是用请求地址&请求方式拼接的字符串，你可以选择其他的一些方式
        pendingRequestArray.push({
          key: `${config.url}&${config.method}`,
          cancel: c,
        });
      });
      config.time = { startTime: new Date().getTime() };
      if (config.method === "get" && config.url != undefined) {
        if (config.params == undefined) {
          config.params = {};
        }
        config.params.__preventCache = new Date().getTime();
      }

      // config.withCredentials = true; // 允许携带token ,这个是解决跨域产生的相关问题
      showNprogress();
      return config;
    },
    function (error) {
      // Do something with request error
      if (DEBUG) {
        console.error("✉️ ", error);
      }
      closeNprogress();
      return Promise.reject(error);
    }
  );

  // 在 response 拦截器中，隐藏进度条 NProgress.done()
  axios.interceptors.response.use((res: any) => {
    if (res.config.time) {
      res.config.time.endTime = new Date().getTime();
      res.duration = res.config.time.endTime - res.config.time.startTime;
    }
    closeNprogress();
    return res;
  });
};
