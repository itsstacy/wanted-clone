import React from "react";
import S3 from "react-aws-s3";
//다음 주소 검색
import Modal from "../components/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

window.Buffer = window.Buffer || require("buffer").Buffer;

function Signupcompany() {
  // .env 로딩
  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME_S,
    region: process.env.REACT_APP_REGION_S,
    accessKeyId: process.env.REACT_APP_ACCESS_S,
    secretAccessKey: process.env.REACT_APP_SECRET_S,
  };
  console.log(config);

  // 회사 profile img 업로드
  const IMG_PATH_ref = React.useRef();
  const [uploadFileURL, setuploadFileURL] = React.useState("");
  //회사 사진 여러장 업로드
  const [array, setArray] = React.useState([]);
  const [uploadMultiFileURL, setuploadMultiFileURL] = React.useState("");

  //한 장
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

  //여러 장
  const arr = [];
  const handleMultiFileInput = (e) => {
    if (e.target.files.length > 0) {
      uploadFileToS3(e.target.files);

      const length = e.target.files.length;
      console.log(length);

      for (let i = 0; i < length; i++) {
        const ReactS3Client = new S3(config);
        // the name of the file uploaded is used to upload it to S3
        ReactS3Client.uploadFile(e.target.files[i], e.target.files[i].name)
          .then((data) => {
            console.log(data.location);

            arr.push(data.location);
            console.log(arr);
            // setFile(arr[0]);
            setArray([...arr]);
            // setDisplay(false);
          })
          .catch((err) => console.error(err));
      }
    }
  };
  //주소 모달창
  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //국가 / 지역 / 산업군
  const [country, setCountry] = React.useState();
  const [region, setRegion] = React.useState([]);
  const [selectedRegion, setSelectedRegion] = React.useState();
  const [industry, setIndustry] = React.useState([]);

  const CountryOptions = [
    { key: "none", value: "국가를 선택해주세요" },
    { key: 1, value: "한국" },
    { key: 2, value: "대만" },
    { key: 3, value: "싱가폴" },
    { key: 4, value: "일본" },
    { key: 5, value: "기타" },
  ];

  const RegionOptionsKorea = [
    { key: "none", value: "지역을 선택해주세요" },
    { key: 1, value: "서울" },
    { key: 2, value: "부산" },
    { key: 3, value: "대구" },
    { key: 4, value: "인천" },
    { key: 5, value: "광주" },
    { key: 6, value: "대전" },
    { key: 7, value: "울산" },
    { key: 8, value: "세종" },
    { key: 9, value: "경기" },
    { key: 10, value: "강원" },
    { key: 11, value: "충북" },
    { key: 12, value: "충남" },
    { key: 13, value: "전북" },
    { key: 14, value: "전남" },
    { key: 15, value: "경북" },
    { key: 16, value: "경남" },
    { key: 17, value: "제주" },
  ];

  const RegionOptionsTaipei = [
    { key: "none", value: "지역을 선택해주세요" },
    { key: 1, value: "Taipei City" },
    { key: 2, value: "New Taipei City" },
    { key: 3, value: "Taoyuan City" },
    { key: 4, value: "Tainan City" },
    { key: 5, value: "Kaoshung City" },
    { key: 6, value: "Keelung City" },
    { key: 7, value: "Hsin-chu City" },
    { key: 8, value: "Hsin-chu Country" },
    { key: 9, value: "Miaoli Country" },
    { key: 10, value: "Chaiyi City" },
    { key: 11, value: "Changhua Country" },
    { key: 12, value: "Nantou Country" },
    { key: 13, value: "Yunlin Country" },
    { key: 14, value: "Chaiyi COuntry" },
    { key: 15, value: "Pingtung Country" },
    { key: 16, value: "Yalin Country" },
    { key: 17, value: "Hualien Country" },
    { key: 18, value: "Taitung Country" },
    { key: 19, value: "Wuhu Country" },
    { key: 20, value: "Jinmen Country" },
    { key: 21, value: "Matsu" },
  ];
  const RegionOptionsSingapore = [
    { key: "none", value: "지역을 선택해주세요" },
    { key: 1, value: "All" },
  ];
  const RegionOptionsJapan = [
    { key: "none", value: "지역을 선택해주세요" },
    { key: 1, value: "Tokyo" },
    { key: 2, value: "Kanagawa" },
    { key: 3, value: "Chiba" },
    { key: 4, value: "Aichi" },
    { key: 5, value: "Osaka" },
    { key: 6, value: "Hyogo" },
    { key: 7, value: "Kyoto" },
    { key: 8, value: "Fukuoka" },
    { key: 9, value: "Okinawa" },
    { key: 10, value: "Hokkaido" },
    { key: 11, value: "Saitama" },
    { key: 12, value: "Hioshima" },
    { key: 13, value: "Miyagi" },
    { key: 14, value: "Etc" },
  ];
  const RegionOptionsEtc = [
    { key: "none", value: "지역을 선택해주세요" },
    { key: 1, value: "All" },
  ];

  const IndustryOptions = [
    { key: "none", value: "산업군을 선택해주세요" },
    { key: 1, value: "IT, 컨텐츠" },
    { key: 2, value: "판매, 유통" },
    { key: 3, value: "제조" },
    { key: 4, value: "기타 서비스업" },
    { key: 5, value: "금융" },
    { key: 6, value: "전문, 과학기술" },
    { key: 7, value: "교육" },
    { key: 8, value: "예술, 스포츠, 여가" },
    { key: 9, value: "물류, 운송" },
    { key: 10, value: "사업지원" },
    { key: 11, value: "건설" },
    { key: 12, value: "부동산" },
    { key: 13, value: "숙박, 음식점" },
    { key: 14, value: "보건,사회복지" },
    { key: 15, value: "전기, 가스" },
    { key: 16, value: "상수도, 환경" },
    { key: 17, value: "농림어업" },
    { key: 18, value: "공공행정, 국방" },
    { key: 19, value: "국제, 외국기관" },
    { key: 20, value: "광업" },
    { key: 21, value: "가사, 가정" },
  ];

  const handleCountry = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
    // console.log(e);
    if (e.target.value === "한국") {
      setRegion(RegionOptionsKorea);
    } else if (e.target.value === "대만") {
      setRegion(RegionOptionsTaipei);
    } else if (e.target.value === "싱가폴") {
      setRegion(RegionOptionsSingapore);
    } else if (e.target.value === "일본") {
      setRegion(RegionOptionsJapan);
    } else {
      setRegion(RegionOptionsEtc);
    }
  };
  console.log(country);
  const handleRegion = (e) => {
    console.log(e.target.value);
    setSelectedRegion(e.target.value);
  };
  console.log(selectedRegion);
  const handleIndustry = (e) => {
    console.log(e.target.value);
    setIndustry(e.target.value);
  };

  //signup form
  const navigate = useNavigate();
  const userid = React.useRef();
  const password = React.useRef();
  const confirmpassword = React.useRef();
  const companyname = React.useRef();
  const intro = React.useRef();
  // const address = React.useRef();
  const [address, setAddress] = React.useState();
  // const getAddress = (addressResult) => {
  //   setAddress(addressResult);
  // };

  //모달에서 주소 데이터 갖고오기
  const addressData = (data) => {
    // console.log(data);
    setAddress(data);
  };
  // console.log(address);

  function signupPost() {
    axios({
      method: "post",
      url: "http://hayeon-sum.shop/api/users/companies/signup",
      data: {
        userid: userid.current.value,
        password: password.current.value,
        confirmpassword: confirmpassword.current.value,
        companyname: companyname.current.value,
        profileimage: uploadFileURL,
        intro: intro.current.value,
        image: array,
        // address: address.current.value,
        address: address,
        country: country,
        region: selectedRegion,
        industry: industry,
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
        <div className="signup-company">
          <h2 className="signup-title">기업 회원 가입</h2>
          <div className="signup-msg-slider"></div>
          <div className="signup-main">
            <div className="signup-form">
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
              <div className="signup-input">
                <label for="companyName" className="form-label">
                  회사이름
                </label>
                <input
                  id="companyName"
                  className="signup-input-form"
                  type="text"
                  placeholder="회사이름"
                  ref={companyname}
                />
                <span></span>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="signup-input" style={{ width: "50%" }}>
                  <label for="companyName" className="form-label">
                    국가
                  </label>
                  <select
                    className="signup-position"
                    onChange={handleCountry}
                    value={country}
                  >
                    {CountryOptions.map((item, index) => (
                      <option key={item.key} value={item.value}>
                        {item.value}
                      </option>
                    ))}
                  </select>
                  <span></span>
                </div>
                <div
                  className="signup-input"
                  style={{ width: "50%", marginLeft: "20px" }}
                >
                  <label for="companyName" className="form-label">
                    지역
                  </label>
                  <select
                    className="signup-position"
                    onChange={handleRegion}
                    value={selectedRegion}
                  >
                    {region.map((item, index) => (
                      <option key={item.key} value={item.value}>
                        {item.value}
                      </option>
                    ))}
                  </select>
                  <span></span>
                </div>
              </div>
              <div className="signup-input">
                <label for="companyName" className="form-label">
                  산업군
                </label>
                <select
                  className="signup-position"
                  onChange={handleIndustry}
                  value={industry}
                >
                  {IndustryOptions.map((item, index) => (
                    <option key={item.key} value={item.value}>
                      {item.value}
                    </option>
                  ))}
                </select>
                <span></span>
              </div>
              <div className="signup-input">
                <label for="profile" className="form-label">
                  회사 프로필 이미지
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
                <label for="companyInfo" className="form-label">
                  회사/서비스 소개
                </label>
                <textarea
                  id="companyInfo"
                  className="signup-input-form"
                  type="text"
                  placeholder="회사정보"
                  style={{ height: "300px" }}
                  ref={intro}
                />
                <span></span>
              </div>
              <div className="signup-input">
                <label for="address" className="form-label">
                  회사주소
                </label>
                <input
                  id="address"
                  className="signup-input-form"
                  type="text"
                  placeholder="대표주소"
                  value={address}
                  // ref={address}
                />
                <span></span>
                <React.Fragment>
                  <button className="signup-btn-company" onClick={openModal}>
                    주소 검색
                  </button>
                  <Modal
                    open={modalOpen}
                    close={closeModal}
                    header="주소 검색"
                    addressData={addressData}
                  ></Modal>
                </React.Fragment>
                <span></span>
              </div>
              <div className="signup-input">
                <label for="profile" className="form-label">
                  회사 소개 이미지
                </label>
                {/* <input
                  type="text"
                  className="upload-name"
                  placeholder="Add the file"
                  ref={IMG_PATH_ref}
                  disabled
                /> */}
                <input
                  id="file"
                  className="signup-input-form"
                  type="file"
                  placeholder="이미지를 선택해주세요"
                  multiple
                  onChange={handleMultiFileInput}
                />
                <span></span>
              </div>
              <button className="signup-btn-company" onClick={signupPost}>
                가입하기
              </button>
              <div className="signup-footer">
                <span>
                  가입 시, 4조가 제공하는 서비스를 모두이용하실 수 있습니다.
                  개인정보취급방침에 동의합니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signupcompany;
