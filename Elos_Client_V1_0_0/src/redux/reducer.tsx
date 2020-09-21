import { ADDNAME, ADDAGE, ADDPRICE } from "./action-type";
import { combineReducers } from "redux";
//Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
function addName(
  state = "initRedux",
  action: {
    type: string;
    data: string;
  }
) {
  //形参默认值
  switch (action.type) {
    case ADDNAME:
      return action.data;
    default:
      return state;
  }
}

function addAge(
  state = 0,
  action: {
    type: string;
    data: number;
  }
) {
  switch (action.type) {
    case ADDAGE:
      return action.data;
    default:
      return state;
  }
}
function addPrice(
  state = 0,
  action: {
    type: string;
    data: number;
  }
) {
  switch (action.type) {
    case ADDPRICE:
      return action.data;
    default:
      return state;
  }
}

export const finalReducer = combineReducers({
  addName,
  addAge,
  addPrice,
});
