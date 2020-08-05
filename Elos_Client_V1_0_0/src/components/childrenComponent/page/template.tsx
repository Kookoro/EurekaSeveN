import React from "react";
import Homepage from "../../Homepage";
import "../css/page.css";

const Template = (props) => {
 return(
    <div className="page">
    <Homepage></Homepage>
    {props.children}
  </div>
 )
}
export default Template;
