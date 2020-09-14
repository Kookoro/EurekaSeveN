import React from "react";
import { Menu } from "antd";
import "../../style/homepage/menuBar.scss";
import { ReactNode } from "react";

interface MenuBar {
  className?: string;
  children: ReactNode; //接受一个父组件传过来的组件
}

const MenuBar: React.FC<MenuBar> = (props: MenuBar) => {
  return (
    <div>
      <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">首页</Menu.Item>
        <Menu.Item key="2">归档</Menu.Item>
        <Menu.Item key="3">标签</Menu.Item>
        <Menu.Item key="4">关于</Menu.Item>
        <Menu.Item key="5">天气</Menu.Item>
      </Menu>
    </div>
  );
};
export default MenuBar;
