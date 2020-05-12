import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import {
  Button,
  Space,
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Avatar,
  Drawer,
} from "antd";
import "../css/header.css";
import ChildMenu from "../components/childrenComponent/ChildMenu";
/*
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

function createElement2(tag, attrs, ...children) {}

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
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
  return (
    <Router>
      <Layout style={{ display: "block" }}>
        <Header className="header ">
          <div className="header-main-container">
            <div
              style={{
                height: "100%",
                width: "80%",
              }}
            >
              col-18 col-push-6
            </div>
            <div
              style={{
                height: "100%",
                width: "20%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* <span className="user-info-name">EurekaSeveN</span>
              <GithubOutlined /> */}
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
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </div>
          </div>
        </Header>
        <div className="siderAndcontent-container">
          <Sider>
            <Menu theme="dark">
              <Menu.Item>
                去Author
                <Link to="/Author">
                  <Button> 去Author </Button> <Button> 去Author </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                去LoginControl
                <Link to="/LoginControl">
                  <Button> 去LoginControl </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                去Article
                <Link to="/Article">
                  <Button> 去Article </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                去footer
                <Link to="/footer">
                  <Button> 去footer </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                去Clock
                <Link
                  to={{
                    pathname: "/Clock",
                    state: state,
                  }}
                >
                  <Button> 去Clock </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                去Calculater
                <Link to="/Calculater">
                  <Button> 去Calculater </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>菜单项</Menu.Item>
              <Menu.Item>菜单项</Menu.Item>
            </Menu>
          </Sider>
          <Content>
            {/* <Route path="/author" component={Author}></Route>
            <Route path="/LoginControl" component={LoginControl} />
            <Route path="/Article" component={Article} />
            <Route path="/Footer" component={MainFooter} />
            <Route path="/Author" component={Author} />
            <Route path="/Clock" component={Clock} />
            <Route path="/Article/Content" component={MainContent} />
            <Route path="/Calculater" component={Calculater} /> */}
            <ChildMenu></ChildMenu>
          </Content>
        </div>
      </Layout>
    </Router>
  );
};
export default HomePage;
