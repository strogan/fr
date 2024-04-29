import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const root = document.getElementById("root");

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  root
);
