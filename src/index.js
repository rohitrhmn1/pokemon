import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { CssBaseline } from "@material-ui/core";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
    <ScrollToTop />
  </React.StrictMode>,
  document.getElementById("root")
);
