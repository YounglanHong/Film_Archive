import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../action/signinAction";

import { Link } from "react-router-dom";

import "../styles/signin.css";

export default function SignIn(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <form
          className="signin_form"
          onSubmit={handleSubmit}
          onKeyPress={enterKeySignIn}
        >
          <h3>SignIn</h3>
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmail} />
          <label>Password</label>
          <input type="password" value={password} onChange={handlePassword} />

          <br />

          <button type="submit">SignIn</button>

          <hr />
          <div>
            <p>New to Film Archive?</p>
            <button>
              <Link to="/signup" className="link">
                Create an Acount
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
