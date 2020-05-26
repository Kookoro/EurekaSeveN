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
  }
  changeObValue() {
    ob.a++;
  }
  componentDidMount() {
    autorun(() => {
      console.log("autorun监听", ob.a);
    });
  }

  render() {
    const store = appStore;
    return (
      <div>
        Auther <h1> {store.timer} </h1>
        <AsyncText></AsyncText>
        <Button onClick={this.changeObValue}> click </Button>{" "}
      </div>
    );
  }
}

export default Auther;
