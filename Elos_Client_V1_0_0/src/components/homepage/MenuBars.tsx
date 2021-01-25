import React from "react";
import { Menu } from "antd";
import "../../style/homepage/menuBar.scss";
import { ReactNode } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
interface MenuBar {
  className?: string;
  children: ReactNode; //接受一个父组件传过来的组件
}

const MenuBar: React.FC<MenuBar> = (props: MenuBar) => {
  return (
    <div>
      <Router>
        <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            {" "}
            <Link to="/pigeonhole">归档</Link>
          </Menu.Item>
          <Menu.Item key="3"></Menu.Item>
          <Menu.Item key="4">
            <Link to="/about"> 关于</Link>
          </Menu.Item>
          <Menu.Item key="5">天气</Menu.Item>
        </Menu>
      </Router>
    </div>
  );
};
export default MenuBar;
