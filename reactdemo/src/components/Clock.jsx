import React from "react";
import axios from "axios";
import "../css/clock.css";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 100,
      date: new Date(),
      datas: this.props.location.state,
      nowDate: "",
    };
  }
  componentDidMount() {
    //会在组件已经被渲染到dom中后执行
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    //组件dom卸载前
    clearInterval(this.timerID);
    this.getBeijingTime = null;
  }
  tick() {
    // this.setState({
    //     date: new Date(),
    //     num: parseInt(this.num) + 1
    // })
    this.setState({
      date: new Date(),
    });
    this.setState((state, props) => ({
      num: state.num++,
    }));
    this.getBeijingTime();
  }
  getBeijingTime() {
    axios.get("http://quan.suning.com/getSysTime.do").then((res) => {
      this.setState({
        nowDate: res.data.sysTime2,
      });
    });
  }
  render() {
    return (
      <div>
        <h1>时钟</h1>
        <div>
          <div
            className="box"
            style={{ height: "100px", width: "100px", backgroundColor: "red" }}
          >
            1
          </div>
          <div
            className="box"
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "yellow",
            }}
          >
            2
          </div>
        </div>

        <h1>
          用户姓名:{this.state.datas.name}
          用户年龄:{this.state.datas.age}
          登录日期:{this.state.datas.year}
          当前北京时间:{this.state.nowDate}
        </h1>
        <h2>it is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
export default Clock;
