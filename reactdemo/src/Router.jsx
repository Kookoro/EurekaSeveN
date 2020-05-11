import React from "react";
import { Route, BrowserRouter as BRouter } from "react-router-dom";

import LoginControl from "./components/LoginControl";
import Article from "./components/Article";
import Homepage from "./components/Homepage";
import Author from "./components/Author";
import Footer from "./components/Footer";
import Clock from "./components/Clock";
import Content from "./components/Content";
import Calculater from "./components/Calculater";
const Router = (props) => {
  return (
    <div>
      <BRouter>
        {/* react路由 */}
        <Route path="/" className="router" component={Homepage} />
      </BRouter>
    </div>
  );
};
export default Router;
