import { ADDNAME, ADDAGE } from "./action-type";

//包含所有的action creator
export const addNameCreater = (name: string) => ({ type: ADDNAME, data: name });
export const addAgeCreater = (age: number) => ({ type: ADDAGE, data: age });
export const addNameAsync = (name: string) => {
  return (dispatch: (arg0: { type: string; data: string }) => void) => {
    setTimeout(() => {
      dispatch(addNameCreater(name));
    }, 2000);
  };
};
