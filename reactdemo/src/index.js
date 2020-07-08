import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <App />,

  <Router></Router>,

  document.getElementById("root")
);
serviceWorker.unregister();
