import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById("root"));
