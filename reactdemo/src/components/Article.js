import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Input } from "antd";

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
  const [newArticle, setNewArticle] = useState({
    aid: "",
    title: "",
    content: "",
  });
  const onInputChange = (e) => {
    const inputValue = e.target.value,
      inputName = e.target.name;
    const data = Object.assign({}, newArticle, { [inputName]: inputValue });
    setNewArticle(data);
  };
  const addArticle = () => {
    let newList = state.list;
    newList.push(newArticle);
    setstate({
      list: newList,
    });
  };
  const deleteComment = (e) => {
    let undeleteList = state.list;
    const index = e.target.getAttribute("index");
    undeleteList.splice(index, 1);
    setstate({
      list: undeleteList,
    });
  };
  return (
    <div>
      评论组件
      <ul>
        {state.list.map((value, key) => {
          return (
            <li key={key}>
              <Link
                to={{
                  pathname: "/Article/Content/" + value.aid,
                  state: value,
                }}
              >
                {value.title}
              </Link>
              <Button
                onClick={(e) => {
                  deleteComment(e);
                }}
                index={key}
              >
                删除评论
              </Button>
            </li>
          );
        })}
      </ul>
      <Input
        placeholder="请填写标题"
        name="title"
        onChange={(e) => {
          onInputChange(e);
        }}
      ></Input>
      <Input
        placeholder="请填写内容"
        name="content"
        onChange={(e) => {
          onInputChange(e);
        }}
      ></Input>
      <Input
        placeholder="请填写编号"
        name="aid"
        onChange={(e) => {
          onInputChange(e);
        }}
      ></Input>
      ;<Button onClick={addArticle}>发表文章</Button>
    </div>
  );
};
export default Article;
