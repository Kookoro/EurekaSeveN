import React from "react";
import { Route, BrowserRouter as BRouter } from "react-router-dom";
import Index from "./components/Index";
import Calender from "./components/homepage/Calender";
{
  /* react路由 */
}
const Router = (props) => {
  return (
    <div>
      <BRouter>
        <Route path="/" className="router" component={Index} />
        <Route path="/Calender" className="router" component={Calender} />
      </BRouter>
    </div>
  );
};
export default Router;
