import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Features from "./components/Parts";

ReactDOM.render(<App features={Features} />, document.getElementById("root"));
