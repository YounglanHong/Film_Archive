import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import SearchRoot from "./pages/SearchRoot";
import MovieRoot from "./pages/MovieRoot";
import MyMovieRoot from "./pages/MyMovieRoot";
import ReviewRoot from "./pages/ReviewRoot";
import PostReview from "./components/Movie/Review/PostReview";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import SignUp from "./pages/SignUp";

import Auth from "./hoc/auth";

class App extends Component {
  /* option 
       - null: 모두 출입 가능
       - true: 로그인 한 유저만 출입 가능
       - false: 로그인 한 유저는 출입 불가 */
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Auth(Home, null)} />
        <Route exact path="/search" component={Auth(SearchRoot, null)} />
        <Route exact path="/movie/:title" component={Auth(MovieRoot, true)} />
        <Route exact path="/myMovie" component={Auth(MyMovieRoot, true)} />
        <Route exact path="/signin" component={Auth(SignIn, false)} />
        <Route exact path="/signout" component={Auth(SignOut, true)} />
        <Route exact path="/signup" component={Auth(SignUp, null)} />
        <Route exact path="/review" component={Auth(ReviewRoot, true)} />
        <Route
          exact
          path="/postReview/:title"
          component={Auth(PostReview, true)}
        />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
