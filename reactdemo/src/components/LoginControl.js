import React, { Component, useState, useEffect } from "react";
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
  const [store, setStore] = useState(0);
  useEffect(() => {
    console.log("setStore调用后", store);
  });
  function changeName() {
    console.log("setStore调用前", store);
    setStore(store + 1);
  }
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
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
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
