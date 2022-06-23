import React from "react";
import defaultjob from "../assets/defaultjob.png";

function Mypage() {
  return (
    <div className="mypage-wrap">
      <nav className="mypage-wrap-bookmark-title">
        <h2>
          <p>북마크</p>
        </h2>
      </nav>
      <div className="mypage-bookmark-container">
        <ul className="mypage-bookmark-lists">
          <li className="mypage-bookmark-list">
            <a>
              <header
                className="mypage-bookmark-img"
                style={{
                  backgroundImage:
                    "url(https://static.wanted.co.kr/images/company/13698/dj6blryj03fgdkgo__400_400.jpg)",
                }}
              >
                <button className="mypage-bookmark-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                    width="22"
                    height="22"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M 3.58065 1 C 3.25997 1 3 1.26206 3 1.58533 V 16.4138 C 3 16.8632 3.48164 17.145 3.86873 16.922 L 9.00004 13.9662 L 14.1313 16.922 C 14.5184 17.145 15 16.8632 15 16.4138 V 1.58533 C 15 1.26206 14.74 1 14.4194 1 H 9.00004 H 3.58065 Z M 8.71195 12.7838 C 8.89046 12.681 9.10961 12.681 9.28812 12.7838 L 13.8387 15.4052 V 2.17067 H 9.00004 H 4.1613 V 15.4052 L 8.71195 12.7838 Z"
                    />
                    <path
                      d="M 9.28812 12.7838 C 9.10961 12.681 8.89046 12.681 8.71195 12.7838 L 4.1613 15.4052 V 2.17067 H 9.00004 H 13.8387 V 15.4052 L 9.28812 12.7838 Z"
                      fill="#3366FF"
                    />
                  </svg>
                </button>
              </header>
              <div className="mypage-bookmark-body">
                <div className="mypage-bookmark-position">
                  [NHN 소프트] Front-End 개발
                </div>
                <div className="mypage-bookmark-company-name">
                  엔에이치엔소프트(NHN SOFT)
                </div>
                <div className="mypage-bookmark-company-location">
                  <span>한국</span>
                </div>
                <div className="mypage-bookmark-reward">
                  채용보상금 1,000,000원
                </div>
              </div>
            </a>
          </li>
          <li className="mypage-bookmark-list">
            <a>
              <header
                className="mypage-bookmark-img"
                style={{
                  backgroundImage:
                    "url(https://static.wanted.co.kr/images/company/13698/dj6blryj03fgdkgo__400_400.jpg)",
                }}
              >
                <button className="mypage-bookmark-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                    width="22"
                    height="22"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M 3.58065 1 C 3.25997 1 3 1.26206 3 1.58533 V 16.4138 C 3 16.8632 3.48164 17.145 3.86873 16.922 L 9.00004 13.9662 L 14.1313 16.922 C 14.5184 17.145 15 16.8632 15 16.4138 V 1.58533 C 15 1.26206 14.74 1 14.4194 1 H 9.00004 H 3.58065 Z M 8.71195 12.7838 C 8.89046 12.681 9.10961 12.681 9.28812 12.7838 L 13.8387 15.4052 V 2.17067 H 9.00004 H 4.1613 V 15.4052 L 8.71195 12.7838 Z"
                    />
                    <path
                      d="M 9.28812 12.7838 C 9.10961 12.681 8.89046 12.681 8.71195 12.7838 L 4.1613 15.4052 V 2.17067 H 9.00004 H 13.8387 V 15.4052 L 9.28812 12.7838 Z"
                      fill="#3366FF"
                      //   fill="#eee"
                    />
                  </svg>
                </button>
              </header>
              <div className="mypage-bookmark-body">
                <div className="mypage-bookmark-position">
                  [NHN 소프트] Front-End 개발
                </div>
                <div className="mypage-bookmark-company-name">
                  엔에이치엔소프트(NHN SOFT)
                </div>
                <div className="mypage-bookmark-company-location">
                  <span>한국</span>
                </div>
                <div className="mypage-bookmark-reward">
                  채용보상금 1,000,000원
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Mypage;
