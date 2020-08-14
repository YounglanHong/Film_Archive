import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../action/signupAction";

import "../styles/signup.css";

export default function SignUp(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  console.log(props);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handlePasswordCheck(e) {
    setPasswordCheck(e.target.value);
  }

  function handleSubmit(e) {
    // 새로고침 방지
    e.preventDefault();

    // password와 passwordCheck 비교
    if (password !== passwordCheck) {
      return alert("비밀번호를 확인해주세요");
    }

    let body = {
      name: name,
      email: email,
      password: password,
    };

    dispatch(signUp(body)).then((res) => {
      console.log(res);
      /* register: { 
           success: true
        }  */
      if (res.payload.success) {
        props.history.push("/signin");
      } else {
        alert("회원가입 해주세요");
      }
    });
  }

  return (
    <div className="SignUp">
      <div className="signup_container">
        <form className="signup_form" onSubmit={handleSubmit}>
          <h3>SignUp</h3>
          <label>Name</label>
          <input type="text" value={name} onChange={handleName} />
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmail} />
          <label>Password</label>
          <input type="password" value={password} onChange={handlePassword} />
          <label>Password Check</label>
          <input
            type="password"
            value={passwordCheck}
            onChange={handlePasswordCheck}
          />

          <br />

          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
}
