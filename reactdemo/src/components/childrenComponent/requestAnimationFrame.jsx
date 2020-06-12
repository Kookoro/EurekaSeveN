import react from "react";
import "../../css/box.css";
import { Button } from "antd";
class box extends React.Component {
  constructor(props) {
    super(props);
    this.startTime = "";
  }
  render() {
    return (
      <div className="box-container">
        <Button onClick={}>点击运行动画</Button>
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
