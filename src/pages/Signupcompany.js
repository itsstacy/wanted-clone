import React from "react";

function Signupcompany() {
  return (
    <div>
      <div className="signup-wrap">
        <div className="signup">
          <h2 className="signup-title">회원 가입</h2>
          <div className="signup-msg-slider"></div>
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
                <label for="password" className="form-label">
                  비밀번호
                </label>
                <input
                  id="password"
                  className="signup-input-form"
                  type="password"
                  placeholder="****"
                />
                <span></span>
              </div>
              <div className="signup-input">
                <label for="passwordCheck" className="form-label">
                  비밀번호 확인
                </label>
                <input
                  id="passwordCheck"
                  className="signup-input-form"
                  type="password"
                  placeholder="****"
                />
                <span></span>
              </div>
              <button className="signup-btn">가입하기</button>
              <div className="signup-footer">
                <span>
                  가입 시, 4조가 제공하는 서비스를 모두이용하실 수 있습니다.
                  개인정보취급방침에 동의합니다.
                </span>
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signupcompany;
