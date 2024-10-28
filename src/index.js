import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./portfolio";
import "./index.css";

function App() {
  return <Portfolio />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
