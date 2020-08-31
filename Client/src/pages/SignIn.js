import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../action/signinAction";

import { TEST_EMAIL } from "../config";
import { TEST_PASSWORD } from "../config";

import { Link } from "react-router-dom";

import "../styles/signin.css";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

//style
const useStyles = makeStyles({
  input_email: {
    margin: "50px 0px 10px 0px",
  },
  input_password: {
    margin: "10px 0px 30px 0px",
  },
  button: { margin: "10px 0px 50px 0px" },
});
// theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f4ff81",
      main: "#eeff41",
      dark: "#aeea00",
      contrastText: "#c6ff00",
    },
  },
});

export default function SignIn(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(TEST_EMAIL);
    setPassword(TEST_PASSWORD);
  });

  // console.log(props);

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  // 엔터키 제출
  function enterKeySignIn(e) {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  }

  function handleSubmit(e) {
    // 새로고침 방지
    e.preventDefault();
    // console.log(email, password);

    let body = {
      email: email,
      password: password,
    };

    dispatch(signIn(body)).then((res) => {
      console.log(res);
      /* payload: { 
           loginSuccess: true
           userId: "5f36a2d6811d7730e8c79a64"
        }
         type: "SIGN_IN" */
      if (res.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("이메일과 비밀번호를 확인해주세요");
      }
    });
  }

  return (
    <div className="SignIn">
      <div className="signin_container">
        <ThemeProvider theme={theme}>
          <Box className="signin_box">
            <Typography component="h1" variant="h5" style={{ color: "black" }}>
              Sign in
            </Typography>

            <form
              className="signin_form"
              onSubmit={handleSubmit}
              onKeyPress={enterKeySignIn}
            >
              <p>testmail로 로그인 하세요:)</p>

              <TextField
                label="Email"
                variant="filled"
                value={email}
                onChange={handleEmail}
                className={classes.input_email}
              />
              <TextField
                label="Password"
                variant="filled"
                value={password}
                type="password"
                onChange={handlePassword}
                className={classes.input_password}
              />
              <Button
                onClick={handleSubmit}
                variant="contained"
                className={classes.button}
              >
                Sign In
              </Button>
            </form>
          </Box>

          {/* <div>
            <p>New to Film Archive?</p>
            <Button disabled variant="contained">
              <Link to="/signup" className="link">
                Create an Acount
              </Link>
            </Button>
          </div> */}
          {/* </form> */}
        </ThemeProvider>
      </div>
    </div>
  );
}
