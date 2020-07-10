/**
 * ES2017 -async
 * Generator函数的语法糖
 * 相较于function *  和yield async表示函数中带有异步操作，await则表示紧跟在其后的表达式需要等待结果
 * 
 * 内置执行器 
 * 语义化更好
 * 适用性更广
 * 返回Promise对象
 * 
 * 
 * async await异步编程终极解决方案  对比promise .then
 *
 * async ====“异步”
 * await(async wait )[可以翻译成异步等待？ ]
 *
 * async 用于声明一个function 表达该function是异步的，而await用于async函数中，目的是等待一个异步方法执行完成 （ajax setTimeOut setInterval等)
 *
 *async函数返回一个Promise对象
 *如果在async函数中返回一个直接的值，那么async会将这个值通过Promise.resolve()包装成一个Promise对象


 */
import React from "react";

class AsyncText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "hello async!",
    };
  }

  render() {
    const result = this.asyncLearn();
    // async 函数返回的是一个 Promise 对象，所以在最外层不能用 await 获取其返回值的情况下，我们当然应该用原来的方式：then() 链来处理这个 Promise 对象，就像这样、
    result.then((e) => {
      console.log(e);
    });

    return <div></div>;
  }
  async asyncLearn() {
    return this.state.val;
  }
  async getStockPriceByName() {}
}
export default AsyncText;
/**
 *
 *
 *
 *
 */
