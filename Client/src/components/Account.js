import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

// import { auth } from "../action/authAction";
import { signOut } from "../action/signoutAction";

import AccountIcon from "@material-ui/icons/AccountCircleOutlined";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "../styles/account.css";

function Account(props) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // console.log(props);
  // Header로부터 받는 props(isAuth)
  const { isAuth } = props;
  console.log(isAuth);

  function handleMenuClick(e) {
    setAnchorEl(e.currentTarget);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
    <div className="Account">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleMenuClick}
      >
        <AccountIcon className="account_logo" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Link to="/signin" className="link">
            Sign In
          </Link>
        </MenuItem>
        {isAuth ? <MenuItem onClick={handleMenuClose}>Mypage</MenuItem> : ""}
        <hr />
        <MenuItem onClick={handleMenuClose}>
          <Link to="signout">
            <ExitToAppIcon onClick={handleSignOut} />
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default withRouter(Account);
