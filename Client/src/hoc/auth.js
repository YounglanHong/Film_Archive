import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { auth } from "../action/authAction";

export default function (Component, option, adminRoute = null) {
  /* option 
       - null: 모두 출입 가능
       - true: 로그인 한 유저만 출입 가능
       - false: 로그인 한 유저는 출입 불가 */
  function AuthCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((res) => {
        // console.log(res);

        //* 분기 처리
        if (!res.payload.isAuth) {
          // 로그인 하지 않은 상태
          if (option) {
            props.history.push("/signin");
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) {
              // alert("이미 로그인 한 상태입니다");
              props.history.push("/");
            }
          }
        }
      });
    }, [dispatch, props.history]);
    return <Component {...props} />;
  }
  return AuthCheck;
}
