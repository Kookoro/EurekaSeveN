import React,{useEffect,useState} from "react";
import "../scss/index.scss";
import axios from "axios";
import { Input } from "antd";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Demo from "../components/childrenComponent/page/reacthooks/reacthooksLearn";
const { Search } = Input;

const Index2 = () => {
  const [state, setState] = useState({
    imgShow: false,
    imgUrl: "",
  });
  useEffect(() => {
    //componentWillMount
    getDailyImg();
  }, []);
  const getDailyImg = () => {

    axios.get("http://localhost:3080/getDailyImg").then((res) => {
      setState({
        // imgUrl: "http://www.bing.com/" + res.data.imgUrl,
        imgUrl: `http://www.bing.com/${res.data.imgUrl}`, //必应每日图片接口
        imgShow: true,
      });
      load();
    });
  };
  const load = () => {
    NProgress.configure({
      minimum: 0.1,
      showSpinner: false,
    });
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 500);
  };
  return (
    <section>
      <div className="header">
        <Header></Header>
      </div>
      <div className="banner">
        <div className="img_container">
          {state.imgShow ? (
            <img src={state.imgUrl} className="index_image" id="scream" />
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
export default Index2;
