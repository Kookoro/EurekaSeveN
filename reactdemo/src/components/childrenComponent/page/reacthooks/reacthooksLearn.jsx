import React, { useState, useEffect,createContext,useContext } from "react";
import { Button } from "antd";

const CountContext = createContext()
const Counter = ()=>{
    const context = useContext(CountContext)
    return(
        <div>
            <h1>childCount: {context}</h1>
        </div>
    )
}

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

  //useContext解决父子组件传值  与useReducer区别





  return (
    <div>
      <h1>count:{count}</h1>
      <h1>weight:{weight}</h1>
      <CountContext.Provider value={count}>
          <Counter></Counter>
      </CountContext.Provider>
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
