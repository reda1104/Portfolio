import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./assets/Styles/font.css"; // Font faces
import "./assets/Styles/typography.css"; // Typography styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
