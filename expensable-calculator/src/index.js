import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="Groceries" color="#06B6D4;" icon="shop" />
  </React.StrictMode>
);
