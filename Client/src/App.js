import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
