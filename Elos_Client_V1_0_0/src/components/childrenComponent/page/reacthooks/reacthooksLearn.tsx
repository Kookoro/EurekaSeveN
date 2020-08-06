import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import { Button } from "antd";

const CountContext = createContext("");
const Counter = () => {
  const context = useContext(CountContext);
  return (
    <div>
      <h1>childCount: {context}</h1>
    </div>
  );
};
const ReducerDemo = () => {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  }, 0);
  //@params1:处理函数
  //@params2:初始值
  return (
    <div>
      <h2>现在的分数是:{count}</h2>
      <Button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        加
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: "sub" });
        }}
      >
        减
      </Button>
    </div>
  );
};
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
  }, []); //只执行componentDidMount
  useEffect(() => {
    console.log("default update lifecycle");
  }); //

  //useContext解决父子组件传值  与useReducer区别
  //reducer
  function countReducer(state, action) {
    switch (action.type) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  }
  //useReducer 增强了JavaScript的Reducer

  return (
    <div>
      <h1>count:{count}</h1>
      <h1>weight:{weight}</h1>
      <CountContext.Provider value={String(count)}>
        <Counter></Counter>
      </CountContext.Provider>
      <ReducerDemo></ReducerDemo>
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
