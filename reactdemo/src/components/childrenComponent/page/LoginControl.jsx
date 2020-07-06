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
  const [store, setStore] = useState({
    val: 0,
    newVal: 1,
  });
  useEffect(() => {
    document.querySelector(".titles").style.width = store.newVal * 20 + "px";
  });
  function add() {
    setStore({ ...store, newVal: store.newVal + 1 });
  }
  // function changeName() {
  //   console.log("setStore调用前", store);
  //   setStore(store + 1);
  // }
  return (
    <div>
      <Button type="primary" danger onClick={props.onClick}>
        Logout
      </Button>
      <Button
        type="primary"
        danger
        onMouseDown={() => {
          add();
        }}
      >
        addStore
      </Button>
      <div
        className="titles"
        style={{ height: "100px", width: "100px", backgroundColor: "red" }}
      >
        1
      </div>
    </div>
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
      if (type === "[object Object]" || type === "[object Array]") {
        options.value = JSON.stringify(options.value);
      }
      localStorage.setItem(options.name, options.value);
    }
  }
  getItem(name) {
    const value = localStorage.getItem(name);
    let item;
    if (!value) {
      return "无数据";
    }
    try {
      item = JSON.parse(value);
    } catch (error) {
      //如果不行就不是json的字符串，就直接返回
      item = value;
    }
    if (item.startTime) {
      const date = new Date().getTime();
      //何时将值取出减去刚存入的时间，与item.expires比较，如果大于就是过期了，如果小于或等于就还没过期
      if (date - item.startTime > item.expires) {
        //缓存过期，清除缓存，返回false
        localStorage.removeItem(name);
        return "已过期";
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
  const storage = new Storage();
  const value = storage.getItem("name");
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
    // function Cat(name) {}
    const fn = () => {};
    console.log(Object.prototype.toString.call(Function.prototype.__proto__));
    console.log(fn.__proto__ === Function.prototype);
    // const a = new Cat();
    // const two = new Object();

    // console.log("a", a.__proto__);
    // console.log("a:value", a.__proto__);
    // console.log("two:proto", two.__proto__);
    // console.log(Cat.prototype.__proto__.__proto__);
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
