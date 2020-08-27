import React from "react";
import { useState, useImperativeHandle } from "react";

const ChildComp = ({ ref }): JSX.Element => {
  const [val, setVal] = useState();
  useImperativeHandle(ref, () => ({
    changeVal: (newVal: any) => {
      setVal(newVal);
    },
  }));
  return <div>{val}</div>;
};
export default ChildComp;
