import React from "react";
import { Route, BrowserRouter as BRouter } from "react-router-dom";
import Index from "./components/Index";

{
  /* react路由 */
}
const Router = (props) => {
  return (
    <div>
      <BRouter>
        <Route path="/" className="router" component={Index} />
      </BRouter>
    </div>
  );
};
export default Router;
