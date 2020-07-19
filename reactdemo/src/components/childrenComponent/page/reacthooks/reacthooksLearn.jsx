import React, { useState, useEffect } from "react";
import { Button } from "antd";
const Demo = () => {
  const [count, setCount] = useState(0);
  const [weight, setWeight] = useState(100);
  useEffect(() => {
    console.log("weight:" + weight);
  }, [weight]);
  useEffect(() => {
    console.log("count:" + count);
  }, [count]);
  useEffect(() => {
    console.log("create default img");
  }, []);//
  useEffect(() => {
    console.log("default update lifecycle");
  }, );//
  return (
    <div>
      <h1>count:{count}</h1>
      <h1>weight:{weight}</h1>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        change count
      </Button>
      <Button
        onClick={() => {
          setWeight(weight + 1);
        }}
      >
        change weight
      </Button>
    </div>
  );
};
export default Demo;
