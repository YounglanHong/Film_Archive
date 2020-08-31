import React from "react";
import { Link } from "react-router-dom";
// import SignIn from "./SignIn";

import "../styles/signout.css";

export default function SignOut() {
  return (
    <div className="SignOut">
      <div className="signout_container">
        <Link to="/signin" className="link">
          <img className="signout_logo" src="video_yellow.png" alt="film" />
        </Link>
        <div>Click to Signin</div>
        {/* <h3>SignOut</h3>
        <br />
        <div>Please Comeback!</div> */}
        {/* <button>
          <Link to="/signin" component={SignIn} className="link">
            Please SignIn
          </Link>
        </button> */}
      </div>
    </div>
  );
}
