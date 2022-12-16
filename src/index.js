import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserModel from "./UserModel";
import ReactRoot from "./ReactRoot";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App model={new UserModel()} />
    </BrowserRouter>
  </React.StrictMode>
);
