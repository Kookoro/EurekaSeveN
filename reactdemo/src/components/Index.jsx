import React, { useState } from "react";
import { Button } from "antd";
import { Link, BrowserRouter as Router } from "react-router-dom";
import ChildMenu from "../components/childrenComponent/ChildMenu";

var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => {
    return a - b;
  }); //升序
  const q = arr[1] - arr[0];
  let flag = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== q) {
      flag = false;
      break;
    }
  }
  console.log(flag);
};

function Index() {
  let arr = [3, 5, 1];
  return (
    <div>
      <h1>111</h1>
      <h1>{canMakeArithmeticProgression(arr)}</h1>
    </div>
  );
}

export default Index;
