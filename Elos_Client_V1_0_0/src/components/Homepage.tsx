import React, { useEffect, useState, FunctionComponent, useRef } from "react";
import { Route } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import "./Homepage.scss";
import { Input, Popover } from "antd";
import HomePageCalendar from "./homepage/component-calender/component-calender";
import Navigator from "./homepage/component-navigator/component-navigator";
import ToolBar from "./homepage/component-toolBar/component-toolBar";
import ArticlesEditor from "./homepage/component-articleEditor/component-articleEditor";
import { Icon } from "./common/icon.common";
import { scrollToTop } from "../common/utils";
import ArticleIndex from "./homepage/component-articleIndex/component-articleIndex";
import Wave from "./homepage/component-wave/component-wave";
import SocialLink from "./homepage/component-socialLink/component-socialLink";
const { Search } = Input;
const Content = () => {
  const [userInfo, setUserInfo] = useState({
    sname: "绮夜幽蓝",
    saddress: "重庆",
    scountry: "中国",
    scomment: "行こう、楽園へ!",
  });
  useEffect(() => {
    // getUserInfo();
  }, []);

  function getUserInfo() {
    axios.get("/index/userinfo").then((res: AxiosResponse) => {
      if (res) {
      }
    });
  }

  return (
    <section className="main_index_container">
      <Wave></Wave>
      <div className="user_info_container">
        <div className="user_info_total_container">
          <div className="user_info_avatar_container">
            <img
              src="https://belos.xyz/image/userAvatar2.jpg"
              alt=""
              onClick={scrollToTop}
            />
          </div>

          <div className="user_info_container">
            <div className="user_info_name">
              <span>{userInfo.sname}</span>
            </div>
            <div className="user_info_comment">
              <span>{userInfo.scomment}</span>
            </div>
          </div>

          <Counter></Counter>
          <SocialLink></SocialLink>
        </div>
        <div className="main_index_calendar">
          <HomePageCalendar />
        </div>
      </div>
      <div className="main_content_container">
        <Route path="/" exact component={ArticleIndex}></Route>
        <Route path="/index2" exact component={ArticlesEditor}></Route>
        <Route path="/index3" exact component={ArticlesEditor}></Route>
        <Route path="/index4" exact component={ArticlesEditor}></Route>
      </div>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="counter-container">
      <div className="counter-item">
        <span className="counter-item-num">23</span>
        <span>记录</span>
      </div>
      <div className="counter-item">
        <span className="counter-item-num">7</span>
        <span>分类</span>
      </div>
      <div className="counter-item">
        <span className="counter-item-num">8</span>
        <span>标签</span>
      </div>
    </div>
  );
};

const Index: FunctionComponent = () => {
  interface ImgState {
    imgShow: boolean;
    naviBarShow: boolean;
  }
  const [state, setState] = useState<ImgState>({
    imgShow: false,
    naviBarShow: false,
  });

  const [imgData, setImgData] = useState({
    url: "",
    copyright: "",
    copyrightlink: "",
  });

  useEffect(() => {
    (function getDailyImg() {
      axios.get("/index/image").then((res: AxiosResponse) => {
        const scrollTop: number = document.documentElement.scrollTop; //滚动条滚动高度
        checkScrollHeight(scrollTop);

        setImgData({
          url: `http://www.bing.com/${res.data.images[0].url}`,
          copyright: res.data.images[0].copyright,
          copyrightlink: res.data.images[0].copyrightlink,
        });
      });
    })();

    const checkScrollHeight = (e: number): void => {
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

    //滚动事件
    const handleScroll = (): void => {
      const scrollTop: number = document.documentElement.scrollTop; //滚动条滚动高度
      checkScrollHeight(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //监听滚动条高度
  //控制图片显示

  return (
    <section>
      <div className="header">
        <Header></Header>
      </div>

      <div className="banner">
        <div className="banner_title_container">
          <h1>TsuBaSa's Blog</h1>
        </div>
        <div
          style={{
            visibility: state.imgShow ? "inherit" : "hidden",
          }}
          className="img_container"
        >
          <img src={imgData.url} className="index_image" id="scream" alt="" />
        </div>
        <Popover
          placement="left"
          content={
            <a target="_blank" href={imgData.copyrightlink}>
              {imgData.copyright}
            </a>
          }
        >
          <div data-copyright={imgData.copyright} className="imgCopyright-icon">
            <Icon.InfoCircleOutlined />
          </div>
        </Popover>
      </div>

      <div className="content">
        <Content></Content>
        <ToolBar click={scrollToTop}></ToolBar>
      </div>

      <footer>
        <div className="foot-container">
          <ul>
            <li className="foot-saying">
              <a
                target="_blank"
                style={{ color: "#ececec" }}
                href="https://www.imdb.com/title/tt0765491/"
              >
                不要哀求，学会争取，若是如此，终有所获。
              </a>
            </li>
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
                Created by{" "}
                <a
                  href="https://github.com/Tsu8sa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tsu8sa
                </a>
              </span>
            </li>

            <li>
              2019-{new Date().getFullYear()}
              &nbsp;
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

const Header: FunctionComponent = () => {
  const child = useRef(null);
  function sendFn(fn): void {
    fn();
  }
  function getChildMethods() {}

  return (
    <div>
      <section className="header_main_container">
        <div className="header_left">
          <span className="header_userName" onClick={getChildMethods}>
            TsuBaSa
          </span>
          {/* 导航条 */}
          <Navigator ref={child} sendfn={sendFn}></Navigator>
        </div>
        <div className="header_right">
          <Search className="input_search" placeholder="搜索文章"></Search>
        </div>
      </section>
    </div>
  );
};

export default Index;
