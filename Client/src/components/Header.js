import React from "react";

import "../styles/header.css";

import NavBar from "./NavBar";

export default function Header(props) {
  return (
    <div className="Header">
      <div className="header_top"></div>
      <div className="header_items">
        <div className="header_item">
          <img className="header_logo" src="video.png" alt="film" />
          <h1>Film Archive</h1>
          <div>Sign In</div>
        </div>
      </div>
      <NavBar />
      <div className="header_bottom"></div>
    </div>
  );
}
