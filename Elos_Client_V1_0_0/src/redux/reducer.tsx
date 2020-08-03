import { ADDNAME, ADDAGE } from "./action-type";
import { combineReducers } from "redux";
function addName(state = "initRedux", action: { type: any; data: any }) {
  //形参默认值
  switch (action.type) {
    case ADDNAME:
      return action.data;
    default:
      return state;
  }
}
function addAge(state = 0, action: { type: any; data: any }) {
  switch (action.type) {
    case ADDAGE:
      return action.data;
    default:
      return state;
  }
}

export const finalReducer = combineReducers({
  addName,
  addAge,
});
