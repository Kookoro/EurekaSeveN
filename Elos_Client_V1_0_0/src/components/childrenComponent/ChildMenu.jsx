import React from "react";

import { Route } from "react-router-dom";
import LoginControl from "./page/LoginControl";

import Article from "./page/Article";
import Author from "./page/Author";
import MainFooter from "./page/Footer";
import Clock from "./page/Clock";
import MainContent from "./page/Content";
import Calculater from "./page/Calculater";
import TestHooks from "./page/TestHooks";
import NewCalendar from "./page/Calendar";
import Homepage from "../Homepage";
const ChildRoute = (props) => {
  return (
    <div>
      <Route path="/homepage" component={Homepage} />
      <Route path="/author" component={Author} />
      <Route path="/LoginControl" component={LoginControl} />
      <Route path="/Article" component={Article} />
      <Route path="/Footer" component={MainFooter} />
      <Route path="/Author" component={Author} />
      <Route path="/Clock" component={Clock} />
      <Route path="/Article/Content" component={MainContent} />
      <Route path="/Calculater" component={Calculater} />
      <Route path="/TestHooks" component={TestHooks} />
      <Route path="/TestHooks" component={TestHooks} />
      <Route path="/Calendar" component={NewCalendar} />
    </div>
  );
};
export default ChildRoute;
