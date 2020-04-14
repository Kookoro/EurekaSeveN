import React, { useState } from "react";
import { Input } from "antd";
const Footer = () => {
  const [state, setstate] = useState({
    value: "",
  });
  return (
    <div>
      <div>react 双向数据绑定</div>
      <Input
        placeholder="请输入"
        onChange={(e) => {
          setstate({
            value: e.target.value,
          });
        }}
      />
      <h1>{state.value}</h1>
    </div>
  );
};

export default Footer;
