import React from "react";

import { Route } from "react-router-dom";
import LoginControl from "../LoginControl";

import Article from "../Article";
import Author from "../Author";
import MainFooter from "../Footer";
import Clock from "../Clock";
import MainContent from "../Content";
import Calculater from "../Calculater";
import TestHooks from "../TestHooks";
const ChildRoute = (props) => {
  return (
    <div>
      <Route path="/author" component={Author}></Route>
      <Route path="/LoginControl" component={LoginControl} />
      <Route path="/Article" component={Article} />
      <Route path="/Footer" component={MainFooter} />
      <Route path="/Author" component={Author} />
      <Route path="/Clock" component={Clock} />
      <Route path="/Article/Content" component={MainContent} />
      <Route path="/Calculater" component={Calculater} />
      <Route path="/TestHooks" component={TestHooks} />
    </div>
  );
};
export default ChildRoute;
