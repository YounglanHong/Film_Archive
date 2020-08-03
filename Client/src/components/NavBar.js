import React from "react";
import { Link } from "react-router-dom";

// import Home from "../pages/Home";
// import Movie from "../components/Movie/Movie";
// import Search from "../components/Search/Search";

import "../styles/navbar.css";

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <div className="navbar_items">
        <Link to="/" className="navbar_item">
          Home
        </Link>
        <Link to="/search" className="navbar_item">
          Search
        </Link>
        <Link to="/movie" className="navbar_item">
          Movie
        </Link>
        <Link to="/movie" className="navbar_item">
          Review
        </Link>
      </div>
    </div>
  );
}
