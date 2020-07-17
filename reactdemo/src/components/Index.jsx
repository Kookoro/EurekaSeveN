import React from "react";
// import { Button } from "antd";
// import { Link, BrowserRouter as Router } from "react-router-dom";
// import ChildMenu from "../components/childrenComponent/ChildMenu";

import "../scss/index.scss";
import axios from "axios";
import { Input } from "antd";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const { Search } = Input;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
      imgShow: false,
    };
  }
  render() {
    return (
      <section>
        <div className="header">
          <Header></Header>
        </div>
        <div className="banner">
          <div className="img_container">
            {this.state.imgShow ? (
              <img
                src={this.state.imgUrl}
                alt="image"
                className="index_image"
                id="scream"
              />
            ) : null}
          </div>
        </div>
        <div className="content"></div>
        <footer>
          <div className="foot-container">
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </footer>
      </section>
    );
  }
  load() {
    NProgress.configure({
      minimum: 0.1,
      showSpinner: false,
    });
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 500);
  }
  getDailyImg() {
    axios.get("http://localhost:3080/getDailyImg").then((res) => {
      this.setState({
        // imgUrl: "http://www.bing.com/" + res.data.imgUrl,
        imgUrl: `http://www.bing.com/${res.data.imgUrl}`, //必应每日图片接口
        imgShow: true,
      });
      this.load();
    });
  }

  componentWillMount() {
    this.getDailyImg();
  }
  componentDidMount() {}
}
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="header_main_container">
        <div className="header_left">
          <ul className="menu_container">
            <li>
              <a href="">首页</a>
            </li>
            <li>
              <a href="">归档</a>
            </li>
            <li>
              <a href="">标签</a>
            </li>
            <li>
              <a href="">关于</a>
            </li>
          </ul>
        </div>
        <div className="header_right">
          <Search className="input_search" placeholder="搜索"></Search>
        </div>
      </section>
    );
  }
}
export default Index;
