import React from "react";
import Homepage from "../../Homepage";
import "../css/page.css";

const Template = (props: { children: React.ReactNode }) => {
  return (
    <div className="page">
      <Homepage></Homepage>
      {props.children}
    </div>
  );
};
export default Template;
