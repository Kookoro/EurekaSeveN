import React from "react";
import { Menu } from "antd";
import "../../style/homepage/menuBar.scss";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface MenuBar {
  className?: string;
  children: ReactNode; //接受一个父组件传过来的组件
}

const MenuBar: React.FC<MenuBar> = (props: MenuBar) => {
  function resetToTop(clickMode): void {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    const speed = 2; //动画速度 越小越快

    if (clickMode === "0") {
      if (c > 0) {
        /*
          window.requestAnimationFrame() 
          你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个 *回调函数* 作为参数，该回调函数会在浏览器下一次重绘之前执行
        */
        window.requestAnimationFrame(resetToTop);
        window.scrollTo(0, c - c / speed);
      }
    } else {
      if (c > 0) {
        /*
          window.requestAnimationFrame() 
          你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个 *回调函数* 作为参数，该回调函数会在浏览器下一次重绘之前执行
        */

        window.requestAnimationFrame(resetToTop);
        window.scrollTo(1000, c - c / speed);
      }
    }
  }

  return (
    <div>
      <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link
            to="/"
            onClick={() => {
              resetToTop("0");
            }}
          >
            首页
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          {" "}
          <Link to="/pigeonhole" onClick={resetToTop}>
            归档
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          {" "}
          <Link to="/index1" onClick={resetToTop}>
            {" "}
            其他
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/about" onClick={resetToTop}>
            {" "}
            关于
          </Link>
        </Menu.Item>
        <Menu.Item key="5">天气</Menu.Item>
      </Menu>
    </div>
  );
};
export default MenuBar;
