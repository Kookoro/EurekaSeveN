import React, { FunctionComponent, useEffect, useState } from "react";
import "./component-articleIndex.scss";

interface Article {
  _id: string;
  stitle: string;
  sdescribe: string;
  nwords: number;
  tag: String[];
  dcreate?: Date;
}

const ArticleIndex: FunctionComponent = (props) => {
  function initArticles() {
    console.log("init");

    const result = {
      data: [
        {
          _id: "00001",
          stitle: "React生命周期(3)",
          sdescribe: `componentWillMount 在渲染前调用,在客户端也在服务端。

        componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
        
        componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
        
        shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
        可以在你确认不需要更新组件时使用。
        `,
          nwords: 4020,
          tag: ["React", "前端", "原理"],
        },
        {
          _id: "00002",
          stitle: "React生命周期(2)",
          sdescribe: `componentWillMount 在渲染前调用,在客户端也在服务端。

        componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
        
        componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
        
        shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
        可以在你确认不需要更新组件时使用。
        `,
          nwords: 4020,
          tag: ["React", "前端", "原理"],
        },
        {
          _id: "00003",
          stitle: "React生命周期(1)",
          sdescribe: `componentWillMount 在渲染前调用,在客户端也在服务端。

        componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
        
        componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
        
        shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
        可以在你确认不需要更新组件时使用。
        `,
          nwords: 4020,
          tag: ["React", "前端", "原理"],
        },
        {
          _id: "00004",
          stitle: "React生命周期",
          sdescribe: `componentWillMount 在渲染前调用,在客户端也在服务端。

        componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
        
        componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
        
        shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
        可以在你确认不需要更新组件时使用。
        `,
          nwords: 4020,
          tag: ["React", "前端", "原理"],
        },
        {
          _id: "00005",
          stitle: "React生命周期",
          sdescribe: `componentWillMount 在渲染前调用,在客户端也在服务端。

        componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
        
        componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
        
        shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
        可以在你确认不需要更新组件时使用。
        `,
          nwords: 4020,
          tag: ["React", "前端", "原理"],
        },
        {
          _id: "00006",
          stitle: "React生命周期",
          sdescribe: `componentWillMount 在渲染前调用,在客户端也在服务端。

        componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
        
        componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
        
        shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
        可以在你确认不需要更新组件时使用。
        `,
          nwords: 4020,
          tag: ["React", "前端", "原理"],
        },
      ],
    };
    return result;
  }
  const [articles, setArtVal] = useState([]);
  useEffect(() => {
    const result: any = initArticles().data;
    setArtVal(result);
  }, []);
  const [isActive, setActive] = useState(0);
  return (
    <div className="article-container">
      <div className="article-header">
        <ul>
          <li className={isActive === 0 ? "header-active" : ""}>最近</li>
          <li className={isActive === 1 ? "header-active" : ""}>分类</li>
          <li className={isActive === 2 ? "header-active" : ""}>阅读</li>
        </ul>
      </div>
      <div className="article-main">
        {articles.map((item: Article, index: number) => {
          return (
            <div key={item._id} className="article-main-item">
              <h1 className="article-item-title">{`${index + 1}.${
                item.stitle
              }`}</h1>
              <div>
                <span className="item-describe">{item.sdescribe}</span>
              </div>
              <div>
                {item.tag.map((type: String, index: number) => {
                  return (
                    <span className="item-keyword" key={index}>
                      {type}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleIndex;
