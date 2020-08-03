import React, { useEffect, useState } from "react";
import { Button } from "antd";

function TestHooks() {
  const [state, setstate] = useState({
    count: 0,
    name: "alife",
    isshow: false,
  });

  // state Hook是一个在函数组件中使用的函数, 该函数名字是useState, 用于在函数组件中提供状态
  //useState的返回值必须是一个数组
  /*
    const [state, setstate] = useState({
    count: 0,
    name: "alife",
    isshow: false,
  });

    一个函数组件可以有多个state  eg:
    const [number, setNumber] = useState(0); // 定义一个状态默认值为0 来控制页面中展示的数字值
    const [isVisible, setVisible] = useState(true); // 定义一个状态默认值为true, 来控制类名为wrapper的div是否显示
    

    原理：
    1.组件节点挂载的App(常见)，该节点带有一个元素对象ReactElement 而，该元素上的type属性有着对函数App的引用
    2.当初始化的时候，即第一次生成节点时，他会创建一个状态，该状态实际上是一个数组，当第一次调用useState时，该Form会被赋值下标0，以及状态值：0
    3.在函数组件运行时，useState调用
      -useState方法会检查该节点生成的状态
      -如果状态为空，则创建一个以自身默认值为状态的内容，同时将其置入状态表中，
      -在第n次调用useState时，检查该节点的状态表是否存在下标，如果没有则重新生成，如果已经存在则从该状态表中读取状态值并忽略默认值


    注意：当函数组件被卸载后状态表被清空后调用useState被赋初值，故尽量利用style来控制元素的消失于隐藏。

    为什么要用react Hook??
    因为复用一个有状态的组件太麻烦了



  */
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
        123
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
