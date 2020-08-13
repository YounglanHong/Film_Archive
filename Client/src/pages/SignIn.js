import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../action/signinAction";

import "../styles/signin.css";

export default function SignIn(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
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
        alert("Error");
      }
    });
  }

  return (
    <div className="SignIn">
      <div className="signin_container">
        <form className="signin_form" onSubmit={handleSubmit}>
          <h3>SignIn</h3>
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmail} />
          <label>Password</label>
          <input type="password" value={password} onChange={handlePassword} />

          <br />

          <button type="submit">SignIn</button>
        </form>
      </div>
    </div>
  );
}
