import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Space } from "antd";
const HomePage = () => {
  const [state, setstate] = useState({
    name: "linlin",
    age: 22,
    year: "2020-04-13",
  });
  return (
    <div>
      <Space>
        <Link to="/Author">
          <Button>去Author</Button>
        </Link>
        <Link to="/LoginControl">
          <Button>去LoginControl</Button>
        </Link>
        <Link to="/Article">
          <Button>去Article</Button>
        </Link>
        <Link to="/footer">
          <Button>去footer</Button>
        </Link>
        <Link to={{ pathname: "/Clock", state: state }}>
          <Button>去Clock</Button>
        </Link>
        <Link to="/Calculater">
          <Button>去Calculater</Button>
        </Link>
      </Space>
    </div>
  );
};
export default HomePage;
