import React, { FunctionComponent, useEffect, useState } from "react";
import "./component-articleIndex.scss";
import TAG from "../../common/icon-tags/icon-tags";
import { timeToSort } from "../../../common/common";
interface Article {
  _id: string;
  stitle: string;
  sdescribe: string;
  nwords: number;
  tag: String[];
  dcreate?: Date;
  slink: string;
}

const ArticleIndex: FunctionComponent = (props) => {
  function initArticles() {
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
          tag: ["React", "前端", "原理", "JavaScript"],
          dcreate: new Date("2021-05-24"),
          slink: "https://belos.xyz/image/React.jpg",
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
          dcreate: new Date("2021-05-23 08:00:00"),
          slink: "https://belos.xyz/image/React.jpeg",
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
          tag: ["React", "Node.js", "原理"],
          dcreate: new Date("2021-05-23 08:00:01"),
          slink: "https://belos.xyz/image/userAvatar.jpg",
        },
        {
          _id: "00004",
          stitle: "Vue双向绑定",
          sdescribe: `componentWillMount 在渲染前调用,在客户端也在服务端。

        componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
        
        componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
        
        shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
        可以在你确认不需要更新组件时使用。
        `,
          nwords: 4020,
          tag: ["Vue", "前端", "原理"],
          dcreate: new Date("2021-05-23 09:00:00"),
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
          dcreate: new Date("2021-05-23 10:00:00"),
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
          dcreate: new Date("2021-05-23 11:00:00"),
        },
        {
          _id: "00007",
          stitle: "React生命周期",
          sdescribe: `componentWillMount 在渲染前调用,在客户端也在服务端。

        componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
        
        componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
        
        shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
        可以在你确认不需要更新组件时使用。
        `,
          nwords: 4020,
          tag: ["React", "前端", "原理"],
          dcreate: new Date("2021-05-24 08:00:00"),
        },
      ],
    };
    return result;
  }
  const [articles, setArtVal] = useState([]);
  useEffect(() => {
    const result = initArticles().data as [];
    setArtVal(result);
  }, []);
  const [isActive, setActive] = useState(0);

  function sortIndexArticle() {}

  const sortList = ["最近", "分类", "阅读"];
  return (
    <div className="article-container">
      <div className="article-header">
        <ul>
          {sortList.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setActive(index);
                }}
                className={isActive === index ? "header-active" : ""}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="article-main">
        {articles.map((item: Article, index: number) => {
          return (
            <div key={item._id} className="article-main-item">
              <div>
                <h1 className="article-item-title">{`${index + 1}.${
                  item.stitle
                }`}</h1>

                <div>
                  <span className="item-describe">{item.sdescribe}</span>
                </div>
                <div className="item-container">
                  <div className="item-tag">
                    {item.tag.map((type: String, index: number) => {
                      return (
                        <div key={index}>
                          <span className="item-keyword">
                            <TAG type={type}></TAG>
                            {type}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="item-date">
                    {timeToSort(item.dcreate, "yyyy-MM-dd")}
                  </div>
                </div>
              </div>
              <div className="item-img" title={item.stitle}>
                <img src={item.slink} />
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};

export default ArticleIndex;
