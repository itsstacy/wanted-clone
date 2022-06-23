import "../styles/App.css";
import React from "react";
import S3 from "react-aws-s3";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

window.Buffer = window.Buffer || require("buffer").Buffer;

function Signup() {
  // 포지션 선택
  const [selected, setSelected] = React.useState("포지션");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };
  // 포지션 선택 옵션
  const Options = [
    { key: "none", value: "포지션을 선택해주세요" },
    { key: 1, value: "Front-end" },
    { key: -1, value: "Back-end" },
  ];
  // .env 로딩
  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME_S,
    region: process.env.REACT_APP_REGION_S,
    accessKeyId: process.env.REACT_APP_ACCESS_S,
    secretAccessKey: process.env.REACT_APP_SECRET_S,
  };
  console.log(config);

  // profile img 업로드
  const IMG_PATH_ref = React.useRef();
  const [uploadFileURL, setuploadFileURL] = React.useState("");

  const handleFileInput = (e) => {
    if (e.target.files[0].name.length > 0) {
      IMG_PATH_ref.current.value = e.target.files[0].name;
      uploadFileToS3(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const uploadFileToS3 = async (file) => {
    const ReactS3Client = new S3(config);

    ReactS3Client.uploadFile(file, file.name)
      .then((data) => {
        // console.log(file);
        console.log(file.name);
        console.log(data.location);
        // 업로드한 URL 가져오기
        setuploadFileURL(data.location);
      })
      .catch((err) => {
        console.log(file);
        // console.log(file.name);
        console.error(err);
      });
  };

  const navigate = useNavigate();
  const userid = React.useRef();
  const password = React.useRef();
  const confirmpassword = React.useRef();
  const username = React.useRef();

  function LoginPost() {
    axios({
      method: "post",
      url: "http://hayeon-sum.shop/api/users/signup",
      data: {
        userid: userid.current.value,
        password: password.current.value,
        confirmpassword: confirmpassword.current.value,
        username: username.current.value,
        profileimage: uploadFileURL,
        position: selected,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          alert("회원 가입이 완료되었습니다!");
          navigate("/login");
        } else {
          alert(res.data.errorMessage);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.config.data);
      });
  }

  return (
    <div>
      <div className="signup-wrap">
        <div className="signup">
          <h2 className="signup-title">회원 가입</h2>
          <div className="signup-msg-slider"></div>
          <div className="signup-main">
            <div className="signup-form">
              <div className="signup-input">
                <label for="position" className="form-label">
                  포지션
                </label>
                <select
                  className="signup-position"
                  onChange={handleSelect}
                  value={selected}
                >
                  {Options.map((item, index) => (
                    <option key={item.key} value={item.key}>
                      {item.value}
                    </option>
                  ))}
                </select>
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
                  ref={userid}
                />
                <span></span>
              </div>
              <div className="signup-input">
                <label for="profile" className="form-label">
                  프로필 이미지
                </label>
                <input
                  type="text"
                  className="upload-name"
                  placeholder="Add the file"
                  ref={IMG_PATH_ref}
                  disabled
                />
                <input
                  id="file"
                  className="signup-input-form"
                  type="file"
                  placeholder="이미지를 선택해주세요"
                  onChange={handleFileInput}
                />
                <span></span>
              </div>
              <div className="signup-input">
                <label for="username" className="form-label">
                  닉네임
                </label>
                <input
                  id="username"
                  className="signup-input-form"
                  type="text"
                  placeholder="user"
                  ref={username}
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
                  ref={password}
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
                  ref={confirmpassword}
                />
                <span></span>
              </div>
              <button className="signup-btn" onClick={LoginPost}>
                가입하기
              </button>
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

export default Signup;
