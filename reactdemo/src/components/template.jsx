import react from "react";
import Homepage from "../components/Homepage";
import "../css/page.css";
import { T } from "antd/lib/upload/utils";

const Template = (props) => {
  <div className="page">
    <Homepage></Homepage>
    {props.children}
  </div>;
};
export default Template;
