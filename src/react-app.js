import React from "react";
import ReactDOM from "react-dom";

const ReactApp = ({ target }) => {
  return <div>This is a React component</div>;
};

export default ({ target }) => {
  ReactDOM.render(<ReactApp />, document.querySelector(target));
};
