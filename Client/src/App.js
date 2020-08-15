import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchRoot from "./pages/SearchRoot";
import MovieRoot from "./pages/MovieRoot";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import SignUp from "./pages/SignUp";

import Auth from "./hoc/auth";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Auth(Home, null)} />
        <Route exact path="/search" component={Auth(SearchRoot, null)} />
        <Route
          exact
          path="/movie/:id/:title"
          component={Auth(MovieRoot, true)}
        />
        <Route exact path="/signin" component={Auth(SignIn, false)} />
        <Route exact path="/signout" component={Auth(SignOut, true)} />
        <Route exact path="/signup" component={Auth(SignUp, null)} />
        {/* <Route exact path="reviews/:id/:title" component={Reviews} /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
