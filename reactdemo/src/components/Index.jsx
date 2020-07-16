import React from "react";
// import { Button } from "antd";
// import { Link, BrowserRouter as Router } from "react-router-dom";
// import ChildMenu from "../components/childrenComponent/ChildMenu";

import "../scss/index.scss";
import Axios from "axios";

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
      <div>
        <div className="header"></div>
        <div className="content">
          <div className="img_container">
            {this.state.imgShow ? (
              <img
                src={this.state.imgUrl}
                alt="image"
                className="index_image"
              />
            ) : null}
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }

  getDailyImg() {
    Axios.get("http://localhost:3080/getDailyImg").then((res) => {
      this.setState({
        // imgUrl: "http://www.bing.com/" + res.data.imgUrl,
        imgUrl: `http://www.bing.com/${res.data.imgUrl}`,
        imgShow: true,
      });
    });
  }

  componentWillMount() {
    this.getDailyImg();
  }
}

export default Index;
