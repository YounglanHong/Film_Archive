import React, { useState } from "react";
import { Link } from "react-router-dom";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../styles/navbar.css";

export default function NavBar() {
  let [navbar, setNavbar] = useState("navbar_items");

  function navbarClick() {
    if (navbar === "navbar_items") {
      setNavbar("navbar_items_toggle");
    } else if (navbar === "navbar_items_toggle") {
      setNavbar("navbar_items");
    }
  }

  const className = window.innerWidth > 768 ? "navbar_items" : navbar;

  return (
    <div className="NavBar">
      <i className="navbar_expand">
        <ExpandMoreIcon onClick={navbarClick} />
      </i>
      <div className={className}>
        {console.log("className", className)}
        <Link to="/" className="navbar_item">
          Home
        </Link>
        <Link to="/search" className="navbar_item">
          Search
        </Link>
        <Link to="/myMovie" className="navbar_item">
          MyMovie
        </Link>
        <Link to="/review" className="navbar_item">
          Review
        </Link>
      </div>
    </div>
  );
}
