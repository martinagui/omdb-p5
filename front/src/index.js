import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import List from "./containers/List";
import "bootswatch/dist/lux/bootstrap.min.css";

const Main = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        <a href="/" className="navbar-brand">
          Movie Hut
        </a>
        <a href="/" className="navbar-brand">
          Sign in
        </a>
      </nav>
      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
