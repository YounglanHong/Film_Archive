import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

// import { auth } from "../action/authAction";
import { signOut } from "../action/signoutAction";

import AccountIcon from "@material-ui/icons/AccountCircleOutlined";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "../styles/account.css";

function Account(props) {
  const dispatch = useDispatch();

  // Header로부터 받는 props(isAuth, name, email)
  const { isAuth, email, name } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  let [auth, setAuth] = useState(false);

  useEffect(() => {
    // console.log(isAuth);
    // account 메뉴에 사용할 auth local state 관리
    setAuth(isAuth);
  }, [isAuth]);

  function handleMenuClick(e) {
    setAnchorEl(e.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function handleSignOut(e) {
    // 새로고침 방지
    e.preventDefault();

    dispatch(signOut()).then((res) => {
      console.log(res);
      /* payload: {success: true}
       type: "SIGN_OUT" */
      if (res.payload.success) {
        props.history.push("/signin");
      }
    });
    // Menu 창 닫기
    setAnchorEl(null);
    // Auth 상태값 변경
    setAuth(false);
  }

  return (
    <div className="Account">
      <Button
        aria-controls="account_menu"
        aria-haspopup="true"
        onClick={handleMenuClick}
      >
        <AccountIcon className="account_logo" />
      </Button>
      <Menu
        id="account_menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {!auth ? (
          <MenuItem onClick={handleMenuClose}>
            <Link to="/signin" className="link">
              Sign In
            </Link>
          </MenuItem>
        ) : (
          <div className="account_item">
            <MenuItem>
              <div className="account_user">
                <div className="account_name">{name}</div>
                <div className="account_email">{email}</div>
              </div>
            </MenuItem>
            <hr />
            <MenuItem>
              <Link to="/" className="link">
                User Settings
              </Link>
            </MenuItem>

            <MenuItem onClick={handleSignOut}>
              <Link to="/signin" className="link">
                Sign Out
              </Link>
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}

export default withRouter(Account);
