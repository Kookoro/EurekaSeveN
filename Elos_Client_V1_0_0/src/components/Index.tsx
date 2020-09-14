import React, { useEffect, useState, FunctionComponent, useRef } from "react";
import "../style/index.scss";
import axios, { AxiosResponse } from "axios";
import { Input, Button } from "antd";
import Dialog from "./homepage/Dialog";
import HomePageCalendar from "./homepage/Calender";
import MenuBars from "./homepage/MenuBars";
import ToolBar from "./homepage/ToolBar";
const { Search } = Input;
const Content = () => {
  let [value, setValue] = useState<number>(1);
  const changeTab = (): void => {
    setValue(++value);
  };
  const sayParentFn = (value: string): void => {
    console.log("调用了父组件方法" + value);
  };
  const ref = React.createRef();
  const childRef: any = useRef();
  const updateChildValue = () => {
    childRef.current.changeVal(99);
  };
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    const speed = 4; //动画速度 越小越快

    if (c > 0) {
      /*
        window.requestAnimationFrame() 
        你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个 *回调函数* 作为参数，该回调函数会在浏览器下一次重绘之前执行
      */
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / speed);
    }
  };
  return (
    <section className="main_index_container">
      <div className="user_info_container">
        <div className="user_info_total_container">
          <div className="user_info_avatar_container">
            <img
              src="https://avatars0.githubusercontent.com/u/42001218?s=460&u=a5f166860cc8ab4b2956197b590eb255b126387a&v=4"
              alt=""
              onClick={scrollToTop}
            />
          </div>
          <span>123456</span>
        </div>
        <div>
          <HomePageCalendar sref={ref} sayParentFn={sayParentFn} />
        </div>
      </div>
      <div className="main_content_container">
        content
        <Button onClick={updateChildValue}>useRef</Button>
        <Button onClick={() => {}}>父组件调用子组件</Button>
      </div>
    </section>
  );
};

const Index2: FunctionComponent = () => {
  interface ImgState {
    imgShow: boolean;
    naviBarShow: boolean;
  }
  const [state, setState] = useState<ImgState>({
    imgShow: false,
    naviBarShow: false,
  });
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    const getUserMsg = (): void => {
      axios.get("");
    };

    const getDailyImg = (): void => {
      axios
        .get("http://localhost:3080/getDailyImg")
        .then((res: AxiosResponse) => {
          setState({
            ...state,
            // imgUrl: "http://www.bing.com/" + res.data.imgUrl,
            imgShow: true,
          });
          setImgUrl(`http://www.bing.com/${res.data.imgUrl}`); //必应每日图片接口)
        });
    };

    const getAnimateImg = (): void => {
      axios
        .get("http://localhost:3080/getAnimateImg")
        .then((res: AxiosResponse) => {
          setState({
            // imgUrl: "http://www.bing.com/" + res.data.imgUrl,
            ...state,
            imgShow: true,
          });
          setImgUrl(`${res.data.imgUrl}`);
        });
    };
    //componentWillMount

    // getAnimateImg();

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
      if (e > 300) {
      }
    };

    getDailyImg(); //请求必应每日图片
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
        <div className="img_container">
          {state.imgShow ? (
            <img src={imgUrl} className="index_image" id="scream" alt="" />
          ) : null}
        </div>
      </div>
      <div className="content">
        <Content></Content>
        <ToolBar></ToolBar>
      </div>
      <footer>
        <div className="foot-container">
          <ul>
            <li className="foot-saying">
              不要哀求，学会争取，若是如此，终有所获。
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

const User: FunctionComponent = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    age: 0,
    sex: "",
  });
  const [state, setstate] = useState({
    visible: false,
  });
  const onInputChange = (attr: string, value: string) => {
    setUserInfo({
      ...userInfo,
      [attr]: value,
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

  const showModel = () => {
    setstate({
      visible: true,
    });
  };

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
        <Button onClick={showModel}>注册</Button>
        <Dialog state={state}></Dialog>
      </ul>
    </section>
  );
};
const Header: FunctionComponent = () => {
  return (
    <div>
      <section className="header_main_container">
        <div className="header_left">
          <span className="header_userName">TsuBaSa </span>
          <MenuBars>
            <Button>你好</Button>
          </MenuBars>
        </div>
        <div className="header_right">
          <Search className="input_search" placeholder="搜索文章"></Search>
        </div>
      </section>
    </div>
  );
};

const Tab = (props: any) => {
  const e = props;
  return (
    <div>
      {e.type === "1" ? (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "red" }}
        ></div>
      ) : null}
      {e.type === "2" ? (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
        ></div>
      ) : null}
      {e.type === "3" ? (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "black" }}
        ></div>
      ) : null}
      {e.type === "4" ? (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "yellow" }}
        ></div>
      ) : null}
    </div>
  );
};

export default Index2;
