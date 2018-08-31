"use strict";

var template = React.createElement(
  "div",
  { className: "container" },
  React.createElement(
    "div",
    { className: "section title-section" },
    React.createElement("img", { src: "" }),
    React.createElement("h1", null),
    React.createElement(
      "i",
      { className: "material-icons" },
      "face"
    )
  ),
  React.createElement("div", { className: "section info1-section" }),
  React.createElement("div", { className: "section map-section" }),
  React.createElement("div", { className: "section info2-section" }),
  React.createElement("div", { className: "section footer-section" })
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
