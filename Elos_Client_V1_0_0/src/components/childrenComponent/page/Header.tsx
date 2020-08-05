import React, { Component } from "react";
import Content from "./Content";
import Clock from "./Clock";
import LoginControl from "./LoginControl";
class MyHeader extends Component<any,any> {
  childmakeMoney: any;
  constructor(props) {
    super(props);
    this.childmakeMoney = this.props.makeMoney;
  }
  render() {
    const { datas } = this.props;
    const len = datas.length;
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
                {item.content} {item.userName}
                <button
               
                >
                  删除
                </button>
              </li>
            );
          })}
        </ul>
        <Content name="linlin" children="sssss"></Content>
        <div> 当前任务条数: {len} </div> <Clock> </Clock>
        <LoginControl> </LoginControl>
      </div>
    );

   
  }
}

export default MyHeader;
