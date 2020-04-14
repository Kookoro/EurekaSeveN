import React, { Component } from "react";
import Content from "./Content";
import Clock from "./Clock";
import LoginControl from "./LoginControl";
class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.childmakeMoney = this.props.makeMoney;
  }
  render() {
    const { datas } = this.props;
    const len = datas.length;
    const val = this.childmakeMoney();
    return (
      <div>
        <ul>
          {datas.map((item, index) => {
            return (
              <li
                style={{
                  listStyle: "none",
                }}
                key={index}
              >
                {item.content}
                {item.userName}
                <button
                  onClick={() => {
                    handle();
                  }}
                >
                  删除
                </button>
              </li>
            );
          })}
        </ul>
        <Content name="linlin" children="sssss"></Content>
        <div>当前任务条数:{len}</div>
        <Clock></Clock>
        <LoginControl></LoginControl>
      </div>
    );
    function handle(index) {
      this.datas.unshift(index);
    }
    function timer() {
      const nowDate = new Date();
      setInterval(() => {
        return nowDate;
      }, 1000);
    }
  }
}

export default MyHeader;
