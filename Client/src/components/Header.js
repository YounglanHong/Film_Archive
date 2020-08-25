import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { auth } from "../action/authAction";

import Account from "./Account";
import NavBar from "./NavBar";

import "../styles/header.css";

function Header(props) {
  const dispatch = useDispatch();

  let [isAuth, setIsAuth] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(auth()).then((res) => {
      if (res.payload.isAuth) {
        setIsAuth(true);
        setName(res.payload.name);
        setEmail(res.payload.email);
      }
    });
  });

  return (
    <div className="Header">
      {/* {console.log(isAuth)} */}
      <div className="header_top"></div>
      <div className="header_items">
        <div className="header_item">
          <Link to="/" className="link">
            <img className="header_logo" src="video_yellow.png" alt="film" />
          </Link>
          <Link to="/" className="link">
            <h1 className="header_title">Film Archive</h1>
          </Link>
          <Account isAuth={isAuth} name={name} email={email} />
        </div>
      </div>
      <NavBar />
      <div className="header_bottom"></div>
    </div>
  );
}

export default withRouter(Header);
