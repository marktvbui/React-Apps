import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
  // return <div>YoBro</div>;
  return <SeasonDisplay />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
