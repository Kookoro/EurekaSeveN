import React, { useState, useEffect } from "react";
import { Button, Space } from "antd";
import {
  Route,
  Link,
  Switch,
  withRouter,
  BrowserRouter,
} from "react-router-dom";
import Auther from "./Author";
import Header from "./Header";
function UserGreeting(props) {
  return <h1>欢迎回来！</h1>;
}

function GuestGreeting(props) {
  return <h1>请先登录</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function LoginButton(props) {
  return (
    <Button type="primary" onClick={props.onClick}>
      Login
    </Button>
  );
}

function LogoutButton(props) {
  const [store] = useState(0);
  useEffect(() => {
    console.log("setStore调用后", store);
  });
  // function changeName() {
  //   console.log("setStore调用前", store);
  //   setStore(store + 1);
  // }
  return (
    <Button type="primary" danger onClick={props.onClick}>
      Logout
    </Button>
  );
}
function Counter(props) {
  const [count, setCount] = useState(
    window.localStorage.getItem("count") === null
      ? 0
      : window.localStorage.getItem("count")
  );
  useEffect(() => {
    window.localStorage.setItem("count", parseFloat(count)); // 插入 对象转字符串
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <Button
        onClick={() => {
          setCount(parseFloat(count) + 1);
        }}
      >
        Click me
      </Button>
      <Button
        onClick={() => {
          window.localStorage.setItem("count", 0); // 插入 对象转字符串
          setCount(0);
        }}
      >
        Reset
      </Button>
    </div>
  );
}
class Storage {
  constructor(name) {
    this.name = "Storage";
  }
  setItem(params) {
    let obj = {
      name: "",
      value: "",
      expires: "",
      startTime: new Date().getTime(), //记录何时将值存入缓存，毫秒级
    };
    let options = {};
    //将obj与传入的params合并至option中;
    Object.assign(options, obj, params);
    //如果options.expires设置了的话
    //以options.name为key，options为值放进localStorage
    if (options.expires) {
      localStorage.setItem(options.name, JSON.stringify(options));
    } else {
      //如果options.expires没有设置，就判断一下value的类型
      const type = Object.prototype.toString.call(options.value);
      if (type === "[object Object]" || type === "[object Object]") {
        options.value = JSON.stringify(options.value);
      }
      localStorage.setItem(options.name, options.value);
    }
  }
  getItem(name) {
    const getValue = localStorage.getItem(name);
    let item;
    try {
      item = JSON.parse(getValue);
    } catch (error) {
      //如果不行就不是json的字符串，就直接返回
      item = getValue;
    }
    if (item.startTime) {
      const date = new Date().getTime();
      //何时将值取出减去刚存入的时间，与item.expires比较，如果大于就是过期了，如果小于或等于就还没过期
      if (date - item.startTime > item.expires) {
        //缓存过期，清除缓存，返回false
        localStorage.removeItem(name);
        return false;
      } else {
        //缓存未过期，返回value
        return item.value;
      }
    } else {
      return item;
    }
  }
  removeItem(name) {
    localStorage.removeItem(name);
  }
  clear() {
    localStorage.clear();
  }
}
function setSt() {
  let storage = new Storage();
  storage.setItem({
    name: "name",
    value: "lllllllll",
    expires: 5000,
  });
}
function getSt() {
  let storage = new Storage();
  let value = storage.getItem("name");
  console.log("我是value", value);
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.storage = new Storage();
    this.state = {
      isLoggedIn: false,
      storage: {},
      data: [
        {
          userName: "A1",
          content: "hello1",
        },
        {
          userName: "A2",
          content: "hello2",
        },
        {
          userName: "A3",
          content: "hello3",
        },
      ],
    };
  }
  handleLoginClick() {
    this.setState({
      isLoggedIn: true,
    });
  }
  handleLogoutClick() {
    this.setState({
      isLoggedIn: false,
    });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    return (
      <div>
        <Counter name="parentSendMsg"></Counter>
        <Greeting isLoggedIn={isLoggedIn} />
        <div>
          {
            (button = isLoggedIn ? (
              <LogoutButton onClick={this.handleLogoutClick} />
            ) : (
              <LoginButton onClick={this.handleLoginClick} />
            ))
          }
        </div>
        <BrowserRouter>
          <Space>
            <Button type="primary">
              <Link to="/Auther">登录</Link>
            </Button>
            <Button type="primary">
              注册
              <Link to="/Header">注册</Link>
            </Button>
          </Space>
          <Button onClick={setSt}>click</Button>
          <Button onClick={getSt}>click2</Button>
          <Switch>
            <Route exact path="/Auther" component={withRouter(Auther)} />
            <Route exact path="/Header" component={withRouter(Header)} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default LoginControl;
