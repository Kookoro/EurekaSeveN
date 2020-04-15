import React, { Component } from "react";
import { observable, autorun } from "mobx";
import { Button } from "antd";
import { observer } from "mobx-react";
import appStore from "../mobx/store";

let ob = observable({ a: 1 });
@observer
class Auther extends Component {
  constructor(props) {
    super(props);
  }
  changeObValue() {
    ob.a = 2;
  }
  componentDidMount() {
    autorun(() => {
      console.log("autorun", ob.a);
    });
  }
  render() {
    const store = appStore;
    return (
      <div>
        Auther
        <h1>{store.timer}</h1>
        <Button onClick={this.changeObValue}>click</Button>
      </div>
    );
  }
}

export default Auther;
