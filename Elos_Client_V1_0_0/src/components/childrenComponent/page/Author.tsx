import React, { Component } from "react";
import { Button } from "antd";
import appStore from "../../../mobx/store";
import AsyncText from "./asyncAwait";
import { observable, autorun } from "mobx";
let ob = observable({
  a: 1,
});
/**
 * 函数柯里化https://juejin.im/post/5af13664f265da0ba266efcf
 * 将多参数的函数转化为单参数的函数
 * function currying(fn,n){
 *  return function(m){
 *    return fn().call(this,m,n)
 * }
 * function tailFactorial(n,total){
 *  if(n===1)return total;
 *  return  tailFactorial(n-1,total*n)
 * }
 * const factorial = currying(tailFactorial,1);
 * factorial(100)
 *
 *
 * 利用函数柯里化 将多个参数的尾递归阶乘函数转化为单参数的阶乘函数
 * 但是ES6规定只有严格模式支持尾递归优化，在非严格模式中，需要使用
 * 1.蹦床函数(不完美)
 * 2.tco函数实现为递归优化
 *
 *
 * }
 *
 *
 *
 *
 *
 *
 */
class Auther extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testObject: {
        a: "1",
      },
      testArr: ["1"],
      testRegExp: /runoob/i,
      testBoolean: false,
      testSymbol: Symbol("PI"),
      testString: "SSSSSS",
      testFunc: () => {
        console.log(this.state.testFunc);
      },
    };
  }
  changeObValue() {
    ob.a++;
    console.log(ob.a);
  }
  componentDidMount() {
    autorun(() => {
      console.log("autorun监听", ob.a);
    });
  }
  printType(obj) {
    // Object.prototype.toString.configurable = false;
    Object.freeze(Object.prototype.toString);

    return Object.prototype.toString.call(obj);
  }
  render() {
    const store = appStore;
    return (
      <div>
        Auther <h1> {store.timer} </h1>
        <h1> {this.printType(this.state.testArr)} </h1>
        <h1> {this.printType(this.state.testRegExp)} </h1>
        <h1> {this.printType(this.state.testBoolean)} </h1>
        <h1> {this.printType(this.state.testSymbol)} </h1>
        <h1> {this.printType(this.state.testString)} </h1>
        <h1> {this.printType(this.state.testFunc)} </h1>
        <AsyncText></AsyncText>
        <Button onClick={this.changeObValue}> click </Button>{" "}
      </div>
    );
  }
}

export default Auther;
