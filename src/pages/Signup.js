import "../styles/App.css";
import React from "react";

function Signup() {
  return (
    <div>
      <div className="signup-wrap">
        <div className="signup">
          <h2 className="signup-title">회원 가입</h2>
          <div className="signup-main">
            <form className="signup-form">
              <div className="signup-input">
                <label for="email" className="form-label">
                  이메일
                </label>
                <input
                  id="email"
                  className="signup-input-form"
                  type="email"
                  placeholder="example@naver.com"
                />
                <span></span>
              </div>
              <div className="signup-input">
                <label for="email" className="form-label">
                  이메일
                </label>
                <input
                  id="email"
                  className="signup-input-form"
                  type="email"
                  placeholder="example@naver.com"
                />
                <span></span>
              </div>
              <div className="signup-input">
                <label for="email" className="form-label">
                  이메일
                </label>
                <input
                  id="email"
                  className="signup-input-form"
                  type="email"
                  placeholder="example@naver.com"
                />
                <span></span>
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
