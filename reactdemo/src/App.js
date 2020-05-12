import React, { Component } from "react";
import "./App.css";
// import { BrowserRouter,Redirect,Switch,Route} from 'react-router-dom';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import MyHeader from "./components/Header";
// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;
import { Layout, Menu, Input } from "antd";

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  makeMoney() {
    let money = 0;

    function add(e) {
      money = parseFloat(e) + money;
      return money;
    }

    function query() {
      console.log(money);
    }

    return {
      add,
      query,
    };
  }
  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <HomeOutlined />
              <span
                className="nav-text"
                onClick={() => {
                  const e = this.makeMoney();
                  e.query();
                }}
              >
                {" "}
                {menuList[0]}{" "}
              </span>{" "}
            </Menu.Item>{" "}
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span className="nav-text"> {menuList[1]} </span>{" "}
            </Menu.Item>{" "}
            <Menu.Item key="3">
              <UploadOutlined />
              <span className="nav-text"> {menuList[2]} </span>{" "}
            </Menu.Item>{" "}
            <Menu.Item key="4">
              <BarChartOutlined />
              <span className="nav-text"> {menuList[3]} </span>{" "}
            </Menu.Item>{" "}
            <Menu.Item key="5">
              <CloudOutlined />
              <span className="nav-text"> {menuList[4]} </span>{" "}
            </Menu.Item>{" "}
            <Menu.Item key="6">
              <AppstoreOutlined />
              <span className="nav-text"> {menuList[5]} </span>{" "}
            </Menu.Item>{" "}
            <Menu.Item key="7">
              <TeamOutlined />
              <span className="nav-text"> {menuList[6]} </span>{" "}
            </Menu.Item>{" "}
            <Menu.Item key="8">
              <ShopOutlined />
              <span className="nav-text"> {menuList[7]} </span>{" "}
            </Menu.Item>{" "}
          </Menu>{" "}
          <Search
            placeholder="input search text"
            onSearch={(value) => console.log(value)}
            style={{
              width: 200,
              position: "fixed",
              bottom: 0,
            }}
          />{" "}
        </Sider>{" "}
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
          }}
        >
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            <div> </div>{" "}
          </Header>{" "}
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
            }}
          >
            <div
              style={{
                height: "calc(100vh - 158px)",
              }}
            >
              <MyHeader
                datas={this.state.data}
                makeMoney={this.makeMoney}
              ></MyHeader>{" "}
            </div>{" "}
          </Content>{" "}
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design© 2018 Created by Ant UED{" "}
          </Footer>{" "}
        </Layout>{" "}
      </Layout>
    );
  }
}
const menuList = [
  "首页",
  "组织管理",
  "人事管理",
  "考勤管理",
  "薪酬福利",
  "招聘管理",
  "培训管理",
  "保险管理",
];

export default App;
