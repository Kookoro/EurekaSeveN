import React, { useEffect, useState } from "react";
import { Button } from "antd";

function TestHooks() {
  const [state, setstate] = useState({
    count: 0,
    name: "alife",
    isshow: false,
  });
  useEffect(() => {
    if (state.count >= 5) {
      document.title = `已经点击了${state.count}次`;
      window.confirm("是否继续点击");
    }
  });
  return (
    <div>
      <Button
        onClick={() =>
          setstate({ ...state, count: state.count + 1, isshow: !state.isshow })
        }
      >
        1
      </Button>
      <Button
        onClick={() =>
          setstate({ ...state, count: state.count - 1, isshow: !state.isshow })
        }
      >
        2
      </Button>
      <h1>{state.count}</h1>
      <h1>{state.name}</h1>
      <h1>{state.isshow}</h1>
    </div>
  );
}
export default TestHooks;
