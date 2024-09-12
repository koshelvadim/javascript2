import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import reportWebVitals from "./reportWebVitals";
import Work1 from "./Work1";
import Work2 from "./Work2";
import Work3 from "./Work3";
import Work4 from "./Work4";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Work1 /> */}
    {/* <Work2 /> */}
    {/* <Work3 /> */}
    <Work4 />
    {/* <Home1 /> */}
    {/* <Home2 /> */}
    {/* <Home3 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
