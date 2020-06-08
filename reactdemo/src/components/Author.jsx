import React, { Component } from "react";
import { Button } from "antd";
import appStore from "../mobx/store";
import AsyncText from "../components/childrenComponent/asyncAwait";
import { observable, autorun } from "mobx";
let ob = observable({
  a: 1,
});

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
      testSymbol: new Symbol("PI"),
      testString: "SSSSSS",
      testFunc: () => {
        console.log(this.state.testFunc);
      },
    };
  }
  changeObValue() {
    ob.a++;
  }
  componentDidMount() {
    autorun(() => {
      console.log("autorun监听", ob.a);
    });
  }
  printType(obj) {
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
