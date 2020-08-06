import React from "react";
import { Link } from "react-router-dom";

import Home from "../pages/Home";

import "../styles/header.css";

import NavBar from "./NavBar";

export default function Header(props) {
  return (
    <div className="Header">
      <div className="header_top"></div>
      <div className="header_items">
        <div className="header_item">
          <Link to="/" className="link">
            <img className="header_logo" src="video_yellow.png" alt="film" />
          </Link>
          <Link to="/" className="link">
            <h1>Film Archive</h1>
          </Link>
          <div>Sign In</div>
        </div>
      </div>
      <NavBar />
      <div className="header_bottom"></div>
    </div>
  );
}
