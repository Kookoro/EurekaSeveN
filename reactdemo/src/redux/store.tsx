import { createStore, applyMiddleware } from "redux";
import { finalReducer } from "./reducer";

//生成store对象
const store = createStore(finalReducer, applyMiddleware()); //内部会第一次调用reducer函数，得到初始state

export default store;
