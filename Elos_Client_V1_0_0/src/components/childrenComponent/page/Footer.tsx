import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
const Footer = () => {
  const [state, setstate] = useState({
    value: "",
  });
  const [count, setCount] = useState(150);
  // Similar to componentDidMount and componentDidUpdate:
  // 类似于 componentDidMount 和 ComponentDidUpdate
  useEffect(() => {
    // Update the document title using the browser API
    //Effect Hook 可以让你能够在 Function 组件中执行副作用（side effects）：
    const box1:any = document.querySelector("#box1");
    box1.innerHTML = `You clicked ${count} times`;
  });

  /*
  通过使用这个 Hook，通知 React 组件需要在渲染后执行什么操作。React 将记住传递的 function（把这个 function 成为 “effect”），并在执行 DOM 更新后调用这个 function。
  在这个效果中，主要的功能仍旧是设置 document.title,但是也可以执行数据获取，或者是调用其他的命令式的 API。
  */
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
          setCount(count + 20);
        }}
      >
        {" "}
        点击{" "}
      </Button>
      <h1> {state.value} </h1> <h1> 你点击了{count}次 </h1>
      <div
        id="box1"
        style={{
          width: count + "px",
          height: "100px",
          backgroundColor: "red",
        }}
      ></div>
    </div>
  );
};

export default Footer;
