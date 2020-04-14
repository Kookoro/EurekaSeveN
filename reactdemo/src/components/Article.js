import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "antd";

// class Article extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 Article
//                </div>
//         )
//     }
// }
const Article = () => {
  const [state, setstate] = useState({
    list: [
      {
        aid: "0001",
        title: "文章01",
        content:
          " 内部的Box1会在垂直方向，一个接一个地放置。Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。BFC的区域不会与float box重叠。BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。计算BFC的高度时，浮动元素也参与计算。",
      },
      {
        aid: "0002",
        title: "文章02",
        content:
          " 内部的Box2会在垂直方向，二个接二个地放置。Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。BFC的区域不会与float box重叠。BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。计算BFC的高度时，浮动元素也参与计算。",
      },
      {
        aid: "0003",
        title: "文章03",
        content:
          " 内部的Box3会在垂直方向，三个接三个地放置。Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。BFC的区域不会与float box重叠。BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。计算BFC的高度时，浮动元素也参与计算。",
      },
    ],
  });

  return (
    <div>
      文章组件
      <ul>
        {state.list.map((value, key) => {
          return (
            <li key={key}>
              <Link
                to={{ pathname: "/Article/Content/" + value.aid, state: value }}
              >
                {value.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Article;
