import React from "react";
import { Component } from "react";
import Expanse from "./components/header";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <div>
          <Expanse />
        </div>
      </div>
    );
  }
}

export default App;
