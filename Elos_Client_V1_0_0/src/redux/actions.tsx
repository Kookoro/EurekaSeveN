import { ADDNAME, ADDAGE, ADDPRICE } from "./action-type";
//Action 是把数据从应用（译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据 ）传到 store 的有效载荷。它是 store 数据的唯一来源。
//包含所有的action creator
//在action中必须使用一个字符串类型的 type 字段来表示将要执行的动作。
export const addNameCreater = (name: string) => ({
  type: ADDNAME,
  data: name,
});
export const addAgeCreater = (age: number) => ({
  type: ADDAGE,
  data: age,
});
//action创建函数
export const addNameAsync = (name: string) => {
  //创建一个 被绑定的 action 创建函数
  return (dispatch: (arg0: { type: string; data: string }) => void) => {
    setTimeout(() => {
      dispatch(addNameCreater(name)); //dispatch 派发一个函数
    }, 2000);
  };
};
export const addPrice = (price: string) => ({
  type: ADDPRICE,
  price: 5499,
});
