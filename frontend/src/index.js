import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
