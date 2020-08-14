import React from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { signOut } from "../action/signoutAction";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "../styles/header.css";

import NavBar from "./NavBar";

function Header(props) {
  const dispatch = useDispatch();
  console.log(props);

  function handleSignOut(e) {
    // 새로고침 방지
    e.preventDefault();

    dispatch(signOut()).then((res) => {
      console.log(res);
      /* payload: {success: true}
       type: "SIGN_OUT" */
      if (res.payload.success) {
        props.history.push("/signout");
      } else {
        props.history.push("/signin");
      }
    });
  }
  return (
    <div className="Header">
      <div className="header_top"></div>
      <div className="header_items">
        <div className="header_item">
          <Link to="/" className="link">
            <img className="header_logo" src="video_yellow.png" alt="film" />
          </Link>
          <Link to="/" className="link">
            <h1 className="header_title">Film Archive</h1>
          </Link>

          <Link to="/signin" className="link">
            Sign In
          </Link>
          <Link to="signout">
            <ExitToAppIcon onClick={handleSignOut} />
          </Link>
        </div>
      </div>
      <NavBar />
      <div className="header_bottom"></div>
    </div>
  );
}

export default withRouter(Header);
