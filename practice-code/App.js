import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child", key: "child1" }, // ✅ added key
    [
      React.createElement("h1", { key: "c1h1" }, "I am now React Developer"),
      React.createElement("h2", { key: "c1h2" }, "I am h2 tag 🚀"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child2" }, // ✅ added key
    [
      React.createElement("h1", { key: "c2h1" }, "I am h1 tag"),
      React.createElement("h2", { key: "c2h2" }, "I am h2 tag"),
    ]
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
