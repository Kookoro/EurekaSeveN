import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { Layout, Menu, Drawer, Input } from "antd";
import "../css/menu.css";
import ChildMenu from "../components/childrenComponent/ChildMenu";
import NewBreadcrumb from "../components/Breadcrumb";
import { GithubOutlined, HomeOutlined } from "@ant-design/icons";
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

JSX
在react中，用独特的jsx语法代替JavaScript传统语法，jsx语法类似xml语法
jsx具有以下几个优点
1.jsx相较于JavaScript执行更快
2.JSX类型安全，能够快速定位错误
3.jsx模板取代html，简单快速
jsx渲染原理:
jsx是基于babel-present-react-app语法解析包，将jsx语法解析成一个传统的React.createElement()方法调用


*/
/**
 *例如 下面的element元素

 *  */
const element = <h1 className="hello">hello world!</h1>;
//转换后成为:
const nextElement = React.createElement(
  "h1",
  {
    className: "hello",
  },
  "hello world!"
);

const HomePage = () => {
  const [state, setState] = useState({
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
  React.useEffect(() => {
    if (state.collapsed) {
      alert(state.year);
    } else {
      return;
    }
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

  const NBreadcrumb = React.forwardRef((props, ref) => {
    return <NewBreadcrumb ref={ref}></NewBreadcrumb>;
  });
  const ref = React.createRef();
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
    NProgress.configure({
      minimum: 0.1,
      showSpinner: false,
    });
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 200);
  }
  function changeStatus() {
    setState({
      ...state,
      collapsed: !state.collapsed,
    });
  }
  // const onRef = useEffect((ref) => {
  //   NewBreadcrumb = ref;
  // });
  // function changeBread() {
  //   NewBreadcrumb.getPath();
  // }
  document.body.onscroll = (e) => {
    const menu = document.querySelector(".menu-container");
    if (window.scrollY > 190) {
      menu.style.position = "fixed";
      menu.style.top = "53px";
    } else {
      menu.style.position = "initial";
    }
  };

  return (
    <Router>
      <Layout
        style={{
          display: "block",
          height: "86vh",
        }}
      >
        <Header className="header ">
          <div className="header-main-container">
            <div
              style={{
                height: "100%",
                width: "20%",
                minWidth: "174px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span onClick={changeStatus} className="website-name-span">
                EurekaSeveN
              </span>
              <GithubOutlined className="github-icon" />
            </div>
            <div
              style={{
                height: "100%",
                width: "80%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
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
                  alt=""
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
                <HomeOutlined />

                <Link to="/">首页</Link>
              </Menu.Item>
              <Menu.Item>
                Author
                <Link to="/Author"></Link>
              </Menu.Item>
              <Menu.Item>
                LoginControl
                <Link to="/LoginControl"></Link>
              </Menu.Item>
              <Menu.Item>
                Article
                <Link to="/Article"></Link>
              </Menu.Item>
              <Menu.Item>
                footer
                <Link to="/footer"></Link>
              </Menu.Item>
              <Menu.Item>
                Clock
                <Link
                  to={{
                    pathname: "/Clock",
                    state: state,
                  }}
                ></Link>
              </Menu.Item>
              <Menu.Item>
                Calculater
                <Link to="/Calculater"></Link>
              </Menu.Item>
              <Menu.Item>
                TestHooks
                <Link to="/TestHooks"></Link>
              </Menu.Item>
              <Menu.Item>
                Calendar
                <Link to="/Calendar"></Link>
              </Menu.Item>
              <Menu.Item>菜单项</Menu.Item>
            </Menu>
          </Sider>

          <Content style={{ minHeight: "9rem", backgroundColor: "#F6F6F6" }}>
            <div className="content-container">
              <NBreadcrumb></NBreadcrumb>
              <ChildMenu></ChildMenu>
            </div>
          </Content>
        </div>
        <Footer className="footer-container">
          <div className="footer-content-main">
            <div></div>
            <a
              style={{
                color: "white",
              }}
              href="http://beian.miit.gov.cn"
              target="_blank"
            >
              ©2019-2020蜀ICP备19040308号
            </a>
          </div>
        </Footer>
      </Layout>
    </Router>
  );
};
export default HomePage;
