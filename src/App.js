import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Initial from "./views/initial-view/Initial";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Initial />
      </div>
    );
  }
}

export default App;
