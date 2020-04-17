import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Space, Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

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
    say: function () {
      console.log("1");
    },
    regexp: new RegExp(/cloneDeep/i),
    isNan: NaN,
  });
  const onCollapse = (collapsed) => {
    const copyData = cloneDeep(state);
    const copyData2 = JSON.parse(
      JSON.stringify(state)
    ); /*
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
  return (
    <div>
      <Button onClick={onCollapse}>onClick</Button>
      <Space>
        <Link to="/Author">
          <Button>去Author</Button>
        </Link>
        <Link to="/LoginControl">
          <Button>去LoginControl</Button>
        </Link>
        <Link to="/Article">
          <Button>去Article</Button>
        </Link>
        <Link to="/footer">
          <Button>去footer</Button>
        </Link>
        <Link to={{ pathname: "/Clock", state: state }}>
          <Button>去Clock</Button>
        </Link>
        <Link to="/Calculater">
          <Button>去Calculater</Button>
        </Link>
      </Space>
    </div>
  );
};
export default HomePage;
