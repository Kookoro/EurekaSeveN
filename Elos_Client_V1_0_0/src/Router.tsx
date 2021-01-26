import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Index from "./components/Homepage";
import Calender from "./components/homepage/Calender";
{
  /* 路由 */
}
const Router = () => {
  return (
    <div>
      <HashRouter>
        <Route path="/" className="router" component={Index} />
      </HashRouter>
    </div>
  );
};
export default Router;
