import React from "react";
import { observer } from "mobx-react";
import appStore from "../mobx/store";
import { Button, InputNumber } from "antd";
@observer
class Calculater extends React.Component {
  render() {
    const store = appStore;
    return (
      <div>
        <div>
          <h1>count:{store.timer}</h1>
          <h1>price:{store.price}</h1>
          <h1>totalPrice:{store.totalPrice}</h1>
          <InputNumber
            defaultValue="0"
            onChange={(e) => {
              store.changePrice(e);
            }}
          ></InputNumber>
          <Button
            onMouseDown={store.increaseOnKeydown}
            onMouseUp={store.increaseOnKeyUp}
          >
            长按
          </Button>
          <Button
            onKeyDown={store.increaseOnKeydown}
            onKeyUp={store.increaseOnKeyUp}
            onClick={() => {
              store.increase();
            }}
          >
            ++
          </Button>
          <Button
            onClick={() => {
              store.decrease();
            }}
          >
            --
          </Button>
          <Button
            onClick={() => {
              store.resetTimer();
            }}
          >
            reset
          </Button>
        </div>
      </div>
    );
  }
}

export default Calculater;
