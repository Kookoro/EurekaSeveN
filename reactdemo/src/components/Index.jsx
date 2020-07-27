import React, { useEffect, useState } from "react";
import "../scss/index.scss";
import axios from "axios";
import { Input, Button } from "antd";

import "nprogress/nprogress.css";
import Demo from "../components/childrenComponent/page/reacthooks/reacthooksLearn";
const { Search } = Input;

//进度条插件配置

const Content = () => {
  let [value, setValue] = useState(1);
  const changeTab = () => {
    setValue(++value);
  };
  return (
    <section className="main_index_container">
      <div className="user_info_container">
        <div className="user_info_avatar_container">avatar</div>

        <span></span>
      </div>
      <div className="main_content_container">
        content
        <Tab type={value}></Tab>
        <Button onClick={changeTab}>下一步</Button>
      </div>
    </section>
  );
};

const Index2 = () => {
  const [state, setState] = useState({
    imgShow: false,
  });
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    const getUserMsg = () => {
      axios.get("");
    };
    const getDailyImg = () => {
      // NProgress.start();
      axios.get("http://localhost:3080/getDailyImg").then((res) => {
        // NProgress.done();
        setState({
          // imgUrl: "http://www.bing.com/" + res.data.imgUrl,
          imgShow: true,
        });
        setImgUrl(`http://www.bing.com/${res.data.imgUrl}`); //必应每日图片接口)
      });
    };

    const getAnimateImg = () => {
      axios.get("http://localhost:3080/getAnimateImg").then((res) => {
        setState({
          // imgUrl: "http://www.bing.com/" + res.data.imgUrl,

          imgShow: true,
        });
        setImgUrl(`${res.data.imgUrl}`);
      });
    };
    //componentWillMount
    // getAnimateImg();
    getDailyImg();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkScrollHeight = (e) => {
    if (e > 600) {
      setState({
        ...state,
        imgShow: false,
      });
    } else {
      setState({
        ...state,
        imgShow: true,
      });
    }
  };

  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop; //滚动条滚动高度
    checkScrollHeight(scrollTop);
  };

  return (
    <section>
      <div className="header">
        <Header></Header>
      </div>
      <div className="banner">
        <div className="banner_title_container">{/* <h1>交响诗篇</h1> */}</div>
        <div className="img_container">
          {state.imgShow ? (
            <img src={imgUrl} className="index_image" id="scream" alt="" />
          ) : null}
        </div>
      </div>
      <div className="content">
        {/* <Content></Content> */}
        <Demo />
        <User />
      </div>
      <footer>
        <div className="foot-container">
          <ul>
            <li>不要哀求，学会争取，若是如此，终有所获。</li>
            <li>
              <span
                style={{
                  fontSize: "12px",
                }}
              >
                本网站仅作个人学习、经验分享以及其他非商业性或非盈利性用途使用。
              </span>
            </li>

            <li>
              <span>
                Design by{" "}
                <a
                  href="https://github.com/EurekaSeveN7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EurekaSeveN7
                </a>
              </span>
            </li>

            <li>
              2019-2020
              <a
                href="http://beian.miit.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
              >
                蜀ICP备19040308号
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

const User = () => {
  const [userInfo, setUserInfo] = useState({
    _id: "",
    name: "",
    age: 0,
    sex: "",
  });
  const onInputChange = (attr, value) => {
    setUserInfo({
      ...userInfo,
      [attr]: value,
    });
  };
  const postMessage = () => {
    axios.post("http://localhost:3080/addUserMsg", userInfo).then((res) => {
      console.log(res);
    });
  };
  const getMessage = () => {
    axios.get("http://localhost:3080/getUserMsg", {}).then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    getMessage();
  }, []);
  return (
    <section>
      <ul>
        <li>
          <span>id:{userInfo.id}</span>
        </li>
        <li>
          <span>name:{userInfo.name}</span>
        </li>
        <li>
          <span>age:{userInfo.age}</span>
        </li>
        <li>
          <span>sex:{userInfo.sex}</span>
        </li>
      </ul>
      <ul
        style={{
          display: "flex",
        }}
      >
        <li>
          <span>编号:</span>
          <Input
            placeholder="编号"
            type="text"
            name="id"
            onChange={(e) => {
              onInputChange(e.target.name, e.target.value);
            }}
          />
        </li>
        <li>
          <span>姓名:</span>
          <Input
            placeholder="姓名"
            type="text"
            name="name"
            onChange={(e) => {
              onInputChange(e.target.name, e.target.value);
            }}
          />
        </li>
        <li>
          <span>年龄:</span>
          <Input
            placeholder="年龄"
            type="text"
            name="age"
            onChange={(e) => {
              onInputChange(e.target.name, e.target.value);
            }}
          />
        </li>
        <li>
          <span>性别:</span>
          <Input
            placeholder="性别"
            type="text"
            name="sex"
            onChange={(e) => {
              onInputChange(e.target.name, e.target.value);
            }}
          />
        </li>
        <Button onClick={postMessage}>注册</Button>
      </ul>
    </section>
  );
};
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
      imgShow: false,
      scrollHeight: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
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
                className="index_image"
                id="scream"
                alt=""
              />
            ) : null}
          </div>
        </div>
        <div className="content">
          <Demo />
        </div>
        <footer>
          <div className="foot-container">
            <ul>
              <li>不要哀求，学会争取，若是如此，终有所获。</li>
              <li>
                <span
                  style={{
                    fontSize: "12px",
                  }}
                >
                  本网站仅作为个人学习、经验分享以及其他非商业性或非盈利性用途使用。
                </span>
              </li>

              <li>
                <span>
                  Design by{" "}
                  <a
                    href="https://github.com/EurekaSeveN7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EurekaSeveN7
                  </a>
                </span>
              </li>

              <li>
                2019-2020
                <a
                  href="http://beian.miit.gov.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  蜀ICP备19040308号
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    );
  }
  handleScroll() {
    let scrollTop = document.documentElement.scrollTop; //滚动条滚动高度
    this.checkScrollHeight(scrollTop);
  }

  checkScrollHeight(e) {
    if (e > 600) {
      this.setState({
        imgShow: false,
      });
    } else {
      this.setState({
        imgShow: true,
      });
    }
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
  getAnimateImg() {
    axios.get("http://localhost:3080/getAnimateImg").then((res) => {
      this.setState({
        // imgUrl: "http://www.bing.com/" + res.data.imgUrl,
        imgUrl: `${res.data.imgUrl}`, //必应每日图片接口
        imgShow: true,
      });
      this.load();
    });
  }
  componentWillMount() {
    this.getDailyImg();
    // this.getAnimateImg();
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
}

class Header extends React.Component {
  render() {
    return (
      <section className="header_main_container">
        <div className="header_left">
          <div className="header_userName">橘皮果酱 </div>
          <ul className="menu_container">
            <li>
              <a href=" ">首页</a>
            </li>
            <li>
              <a href=" ">归档</a>
            </li>
            <li>
              <a href=" ">标签</a>
            </li>
            <li>
              <a href=" ">关于</a>
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

const Tab = (props) => {
  const e = props;
  return (
    <div>
      {e.type == "1" ? (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "red" }}
        ></div>
      ) : null}
      {e.type == "2" ? (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
        ></div>
      ) : null}
      {e.type == "3" ? (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "black" }}
        ></div>
      ) : null}
      {e.type == "4" ? (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "yellow" }}
        ></div>
      ) : null}
    </div>
  );
};

export default Index2;
