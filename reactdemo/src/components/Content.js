import React, { Component, useState } from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const Content = (props) => {
  const [state, setstate] = useState({
    list: props.location.state,
  });

  let history = useHistory();
  function handleClick() {
    history.push("");
  }
  return (
    <div>
      <h1>{props.location.state.content}</h1>
      <Button onClick={handleClick}>返回</Button>
    </div>
  );
};

export default Content;
