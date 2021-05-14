import React, { useEffect, useState } from "react";
import "./component-toolBar.scss";
import { UpOutlined } from "@ant-design/icons";
interface toolbar {
  click: Function;
}

function Toolbar(prop: toolbar) {
  // document.addEventListener("scroll", () => {
  //   const height = document.documentElement.scrollTop;
  //   handleChangeBtn(height);
  // });
  const [state, setstate] = useState(false);

  function handleChangeBtn(value) {
    if (value >= 600) {
      setstate(true);
    } else {
      setstate(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const height = document.documentElement.scrollTop;
      handleChangeBtn(height);
    });
  }, []);

  function backToTop() {
    prop.click();
  }

  return (
    <div
      style={{ display: state === true ? "flex" : "none" }}
      onClick={backToTop}
      className="toolbar-container"
    >
      <UpOutlined style={{ fontSize: "18px" }} />
    </div>
  );
}

export default Toolbar;
