import { Divider } from "antd";
import React, { FunctionComponent, useEffect } from "react";
import "./component-articleIndex.scss";
interface Parent {}

const ArticleIndex: FunctionComponent = (props: Parent) => {
  function initArticles() {
    console.log("init");
  }

  useEffect(() => {
    initArticles();
    return () => {};
  }, []);

  return (
    <div className="article-container">
      <div className="article-main">
        <div className="article-main-item">111</div>
        <Divider></Divider>
      </div>
    </div>
  );
};

export default ArticleIndex;
