import React from "react";
import { observer } from "mobx-react";
import appStore from "../mobx/store";
import { Button, InputNumber } from "antd";

class Calculater extends React.Component {
  render() {
    const store = appStore;
    return (
      <div>
        <div>
          <h1> count: {store.timer} </h1> <h1> price: {store.price} </h1>{" "}
          <h1> totalPrice: {store.totalPrice} </h1>{" "}
          <InputNumber
            defaultValue="0"
            onChange={(e) => {
              store.changePrice(e);
            }}
          ></InputNumber>
          <Button
            onClick={() => {
              store.increase();
            }}
          >+</Button>{" "}
          <Button
            onClick={() => {
              if (store.timer === 0) {
                return;
              }
              store.decrease();
            }}
          >
            --
          </Button>{" "}
          <Button
            onClick={() => {
              store.resetTimer();
            }}
          >
            reset{" "}
          </Button>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Calculater;
