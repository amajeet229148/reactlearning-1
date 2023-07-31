import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//  import { AppRoot  } from "./App"; // this is normal Export

import AppRoot from "./App";

const mainEleMent = document.getElementById("main-root");

const root = ReactDOM.createRoot(mainEleMent);
root.render(
  <React.StrictMode>
    <AppRoot></AppRoot>
  </React.StrictMode>
);

// components are nothing just a javascript function which return the jsx

// components first Letter should be start with capital letter

// what is jsx => it just a way to write html in react
// in technology terms it is javasscript xml
// we are writing all our website code in jsx , but browser only understand html nothing else
// than how react convert jsx into html
// for that babel plays a role it converts jsx into html for react
// babel is another library
