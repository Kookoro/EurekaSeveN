import React from "react";
import "./component-toolBar.scss";
import { UpOutlined } from "@ant-design/icons";
interface toolbar {
  click: Function;
}

function Toolbar(prop: toolbar) {
  function backToTop() {
    prop.click();
  }

  return (
    <div onClick={backToTop} className="toolbar-container">
      <UpOutlined style={{ fontSize: "18px" }} />
    </div>
  );
}

export default Toolbar;
