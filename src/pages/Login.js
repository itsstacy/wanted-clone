import React from "react";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const userid = React.useRef();
  const password = React.useRef();

  function LoginPost() {
    axios({
      method: "post",
      url: `http://13.209.35.101:3000/api/users/login`,
      data: {
        userid: userid.current.value,
        password: password.current.value,
      },
    })
      .then((res) => {
        if (res.data.success === true) {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
          }
          alert("안녕하세요!");
          navigate("/");
        } else {
          alert("가입한 회원이 아닙니다.");
        }
        console.log(res);
      })
      .catch((err) => {
        // alert("가입한 회원이 아닙니다.");
        console.log(err);
      });
  }

  return (
    <div>
      <div className="signup-wrap">
        <div className="signup">
          <h2 className="signup-title">로그인</h2>
          <div className="signup-msg-slider"></div>
          <div className="signup-main">
            <div className="signup-form">
              <div className="signup-input">
                <input
                  id="email"
                  className="signup-input-form"
                  type="email"
                  placeholder="이메일"
                  ref={userid}
                />
                <span></span>
              </div>
              <div className="signup-input">
                <input
                  id="password"
                  className="signup-input-form"
                  type="password"
                  placeholder="비밀번호"
                  ref={password}
                />
                <span></span>
              </div>
              <button className="signup-btn" onClick={LoginPost}>
                통합 로그인
              </button>
              {/* <button className="signup-btn-company" onClick={LoginPost}>기업 회원 로그인</button> */}
              <p className="login-to-signup">
                <span
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  회원 가입
                </span>
                <span
                  onClick={() => {
                    navigate("/signupcompany");
                  }}
                >
                  기업 회원 가입
                </span>
              </p>
              <div className="signup-footer">
                <span>
                  가입 시, 4조가 제공하는 서비스를 모두이용하실 수 있습니다.
                  개인정보취급방침에 동의합니다.
                </span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
