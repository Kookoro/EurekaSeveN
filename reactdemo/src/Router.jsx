import React from "react";
import { Route, BrowserRouter as BRouter } from "react-router-dom";

import Homepage from "./components/Homepage";

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
