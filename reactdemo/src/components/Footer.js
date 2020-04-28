import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
const Footer = () => {
  const [state, setstate] = useState({
    value: "",
  });
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  // 类似于 componentDidMount 和 ComponentDidUpdate
  useEffect(() => {
    // Update the document title using the browser API

    const box1 = document.querySelector("#box1");
    debugger;
  });
  return (
    <div>
      <div> react 双向数据绑定 </div>{" "}
      <Input
        placeholder="请输入"
        onChange={(e) => {
          setstate({
            value: e.target.value,
          });
        }}
      />{" "}
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        点击{" "}
      </Button>
      <h1> {state.value} </h1> <h1> 你点击了{count}次 </h1>
      <div
        id="box1"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
      ></div>
    </div>
  );
};

export default Footer;
