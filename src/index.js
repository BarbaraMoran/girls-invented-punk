import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
