import React from "react";
import { Route, BrowserRouter as BRouter } from "react-router-dom";
import Index from "./components/Index";

const Router = (props) => {
  return (
    <div>
      <BRouter>
        {/* react路由 */}
        <Route path="/" className="router" component={Index} />
      </BRouter>
    </div>
  );
};
export default Router;
