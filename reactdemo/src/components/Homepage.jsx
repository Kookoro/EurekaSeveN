import React, { useState, useEffect, useRef } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Layout, Menu, Drawer, Input } from "antd";
import "../css/menu.css";
import ChildMenu from "../components/childrenComponent/ChildMenu";
import Calendar from "../components/childrenComponent/Calendar";
import NewBreadcrumb from "../components/Breadcrumb";
import { GithubOutlined } from "@ant-design/icons";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const { Header, Content, Sider, Footer } = Layout;
const { Search } = Input;
/*<GithubOutlined />
  createElement原理

  function App() {
  return (
      <p className="title">hello world</p>
  );
}

ReactDOM.render(<APP />, document.getElementById("root"));
====================================================               
会被babel编译成
function App() {
  return React.createElement(
    "p",
    { className: "title" },
    "hello world"
  );
}

ReactDOM.render(React.createElement(APP, null), document.getElementById("root"));



*/

const HomePage = () => {
  const [state] = useState({
    name: "linlin",
    age: 22,
    year: "2020-04-13",
    collapsed: false,
    list: {
      a: 1,
      b: 2,
      c: 3,
    },
    date: new Date(),
    regexp: new RegExp(/cloneDeep/i),
    isNan: NaN,
  });

  const onCollapse = (collapsed) => {
    const copyData = cloneDeep(state);
    const copyData2 = JSON.parse(JSON.stringify(state));
    /*
    JSON.stringify()只能序列化对象的可枚举的自有属性，
    例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；

*/
    console.log(copyData);
    console.log(copyData2);
    // setState(() => {
    //   const data = Object.assign({}, state, { collapsed: collapsed });
    //   return data;
    // });
  };

  const cloneDeep = (obj) => {
    let result;
    const type = Object.prototype.toString.call(obj);
    if (typeof obj === "object") {
      switch (type) {
        //使用JSON.stringify()时会丢失一些属性
        case "[object Array]":
          result = [];
          //如果为数组，则遍历递归再次判断
          for (let i in obj) {
            result.push(cloneDeep(obj[i]));
          }
          break;
        case "[object RegExp]":
          //对正则兼容
          result = obj;
          break;
        case "[object Null]":
          //对Null兼容
          result = null;
          break;
        default:
          //obj为对象;
          result = {};
          for (let i in obj) {
            result[i] = cloneDeep(obj[i]);
          }
          break;
      }
      return result;
    } else {
      return (result = obj);
    }
  };

  const [states, setstates] = useState({
    visible: false,
  });

  const showDrawer = () => {
    setstates({
      visible: true,
    });
  };
  const onClose = () => {
    setstates({
      visible: false,
    });
  };

  // window.addEventListener("scroll", (e) => {
  //   const header = document.querySelector(".header");
  //   if (document.body.scrollHeight >= 53) {
  //     header.style.display = "none";
  //   } else {
  //     header.style.display = "flex";
  //   }
  // });
  const backToTop = (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  function load() {
    const header = document.querySelector("header");
    NProgress.configure({
      minimum: 0.1,
    });
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 2000);
  }
  // const onRef = useEffect((ref) => {
  //   NewBreadcrumb = ref;
  // });
  // function changeBread() {
  //   NewBreadcrumb.getPath();
  // }
  document.body.onscroll = (e) => {
    const menu = document.querySelector(".menu-container");
    if (window.scrollY > 204) {
      menu.style.position = "fixed";
      menu.style.top = "53px";
    } else {
      menu.style.position = "initial";
    }
  };

  return (
    <Router>
      <Layout style={{ display: "block" }}>
        <Header className="header ">
          <div className="header-main-container">
            <div
              style={{
                height: "100%",
                width: "20%",
              }}
            >
              <span className="website-name-span">EurekaSeveN</span>
              <GithubOutlined className="github-icon" />
            </div>
            <div
              style={{
                height: "100%",
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="input-search-container">
                {/* <span className="user-info-name">EurekaSeveN</span>
              <GithubOutlined /> */}

                <Search
                  className="input-search"
                  placeholder="Search article"
                ></Search>
              </div>
              <div className="user-info-avatar">
                <img
                  src="https://avatars2.githubusercontent.com/u/42001218?s=400&u=5e65204880e8ba2585d5dfa5859526c7d05738a1&v=4"
                  alt=" "
                  style={{
                    height: "100%",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                  onClick={showDrawer}
                />
              </div>
              <Drawer
                title="EurekaSeveN"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={states.visible}
              >
                <p>演示案例1</p>
                <p>演示案例2</p>
                <p>演示案例3</p>
                <p>演示案例4</p>
                <p>演示案例5</p>
                <p>演示案例6</p>
                <p>演示案例7</p>
                <p>演示案例8</p>
                <p>演示案例9</p>
              </Drawer>
            </div>
          </div>
        </Header>
        <div className="siderAndcontent-container clearfix">
          <Sider style={{ backgroundColor: "#282a36" }} width="1.5rem">
            <div style={{ height: "2rem", width: "100%" }}></div>
            <Menu
              onClick={() => {
                load();
                backToTop();
              }}
              theme="dark"
              mode="inline"
              className="menu-container"
            >
              <Menu.Item>
                Author
                <Link to="/Author">
                  <Button> Author </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                LoginControl
                <Link to="/LoginControl">
                  <Button> LoginControl </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                Article
                <Link to="/Article">
                  <Button> Article </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                footer
                <Link to="/footer">
                  <Button> footer </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                Clock
                <Link
                  to={{
                    pathname: "/Clock",
                    state: state,
                  }}
                >
                  <Button> Clock </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                Calculater
                <Link to="/Calculater">
                  <Button> Calculater </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                TestHooks
                <Link to="/TestHooks">
                  <Button> TestHooks </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>菜单项</Menu.Item>
            </Menu>
          </Sider>

          <Content style={{ minHeight: "10rem" }}>
            <NewBreadcrumb></NewBreadcrumb>
            <ChildMenu></ChildMenu>
          </Content>
        </div>
        <Footer className="footer-container">
          <div className="footer-content-main">
            <div></div>
            <a
              style={{
                color: "white",
              }}
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252"
              target="_blank"
            >
              ©2020-2020蜀ICP备19040308号
            </a>
          </div>
        </Footer>
      </Layout>
    </Router>
  );
};
export default HomePage;
