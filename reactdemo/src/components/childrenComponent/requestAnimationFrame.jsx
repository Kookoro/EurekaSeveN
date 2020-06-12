import react from "react";
import "../../css/box.css";
import { Button } from "antd";
class box extends React.Component {
  constructor(props) {
    super(props);
    this.startTime = "";
    this.mySymbol = Symbol();
    this.obj = {
      [this.mySymbol](arg) {
        console.log(arg);
      },
    };
  }

  render() {
    return (
      <div className="box-container">
        <Button onClick={this.obj[this.mySymbol](123)}>点击运行动画</Button>
        <div id="anim"></div>
      </div>
    );
  }

  renderAnimation(time) {
    if (!time) {
      time = Date.now();
    }
    if (!this.startTime) {
      this.startTime = time;
    }
  }
}
export default box;
