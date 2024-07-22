import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Shell from "./pages/shell";
import "./index.css";

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Shell />
  </React.StrictMode>
);

reportWebVitals();
