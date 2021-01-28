import React, { useEffect, useState, FunctionComponent, useRef } from "react";
import "./Homepage.scss";
import axios, { AxiosResponse } from "axios";
import { Input, Popover } from "antd";
import HomePageCalendar from "./homepage/component-calender/component-calender";
import Navigator from "./homepage/component-navigator/component-navigator";
import ToolBar from "./homepage/component-toolBar/component-toolBar";
import ArticlesList from "./homepage/component-articlesList/component-articlesList";
import { Icon } from "../component.common";
import { Route } from "react-router-dom";
const { Search } = Input;

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  const speed = 2; //动画速度 越小越快

  if (c > 0) {
    /*
      window.requestAnimationFrame() 
      你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个 *回调函数* 作为参数，该回调函数会在浏览器下一次重绘之前执行
    */
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / speed);
  }
};

const Content = () => {
  let [value, setValue] = useState<number>(1);

  const sayParentFn = (value: string): void => {
    console.log("调用了父组件方法" + value);
  };
  const ref = React.createRef();

  return (
    <section className="main_index_container">
      <div className="user_info_container">
        <div className="user_info_total_container">
          <div className="user_info_avatar_container">
            <img
              src="http://106.15.61.198/image/userAvatar.jpg"
              alt=""
              onClick={scrollToTop}
            />
          </div>
        </div>
        <div>
          <HomePageCalendar sref={ref} sayParentFn={sayParentFn} />
        </div>
      </div>
      <div className="main_content_container">
        <Route path="/index1" exact component={ArticlesList}></Route>
        <Route path="/index2" exact component={ArticlesList}></Route>
        <Route path="/index3" exact component={ArticlesList}></Route>
        <Route path="/index4" exact component={ArticlesList}></Route>
      </div>
    </section>
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
  const [imgUrl, setImgUrl] = useState<string>("");
  const [imgCopyright, setCopyRight] = useState<string>("");
  const [imgCopyrightLink, setCopyRightLink] = useState<string>("");
  useEffect(() => {
    (function getDailyImg() {
      axios.get("/index/getDailyImg").then((res: AxiosResponse) => {
        setState({
          ...state,
          // imgUrl: "http://www.bing.com/" + res.data.imgUrl,
          imgShow: true,
        });
        setImgUrl(`http://www.bing.com/${res.data.images[0].url}`); //必应每日图片接口)
        setCopyRight(res.data.images[0].copyright);
        setCopyRightLink(res.data.images[0].copyrightlink);
      });
    })();
    // const getAnimateImg = (): void => {
    //   axios
    //     .get("http://localhost:3080/getAnimateImg")
    //     .then((res: AxiosResponse) => {
    //       setState({
    //         // imgUrl: "http://www.bing.com/" + res.data.imgUrl,
    //         ...state,
    //         imgShow: true,
    //       });
    //       setImgUrl(`${res.data.imgUrl}`);
    //     });
    // };main_content_container

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
          <img src={imgUrl} className="index_image" id="scream" alt="" />
        </div>
        <Popover
          placement="left"
          content={
            <a target="_blank" href={imgCopyrightLink}>
              {imgCopyright}
            </a>
          }
        >
          <div data-copyright={imgCopyright} className="imgCopyright-icon">
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
                Created by
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
  function getChildMethods() {
    console.log(child);
  }

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
