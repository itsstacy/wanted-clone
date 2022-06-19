import React from 'react'
import Carousels from '../elements/Carousels';
import logoai from '../assets/logo_ai.png';
import defaultjob from '../assets/defaultjob.png';
import company1 from '../assets/company1.png';
import company2 from '../assets/company2.png';
import company3 from '../assets/company3.png';
import examplelogo from '../assets/examplelogo.png';
import axios from 'axios';

function Main() {
  axios.get(`http://13.209.35.101:3000/api/posting`,{})
  .then((response) => {
    console.log(response.data);
  });
 

  return (
    <div className="mainpage">
      <Carousels/>
      <section className="main-container">
        <div className="heading">
          <img src={logoai} className="logoai"/> 가 제안하는 합격률 높은 포지션
        </div>  
        <div className="joblist">
          <div className="job-card">
            <img src={defaultjob} className="job-img"/>
            <div className="card-text-wrap">
              <div className="cardhead">[신선하이개발실]프론트엔드 개발자</div>
              <div className="card-company">그린랩스</div>
              <div className="card-location">서울.한국</div>
              <div className="normal-text">채용보상금 1,000,000원</div>
            </div>
          </div>
          <div className="job-card">
            <img src={defaultjob} className="job-img"/>
            <div className="card-text-wrap">
              <div className="cardhead">[신선하이개발실]프론트엔드 개발자</div>
              <div className="card-company">그린랩스</div>
              <div className="card-location">서울.한국</div>
              <div className="normal-text">채용보상금 1,000,000원</div>
            </div>
          </div>
          <div className="job-card">
            <img src={defaultjob} className="job-img"/>
            <div className="card-text-wrap">
              <div className="cardhead">[신선하이개발실]프론트엔드 개발자</div>
              <div className="card-company">그린랩스</div>
              <div className="card-location">서울.한국</div>
              <div className="normal-text">채용보상금 1,000,000원</div>
            </div>
          </div>
          <div className="job-card">
            <img src={defaultjob} className="job-img"/>
            <div className="card-text-wrap">
              <div className="cardhead">[신선하이개발실]프론트엔드 개발자</div>
              <div className="card-company">그린랩스</div>
              <div className="card-location">서울.한국</div>
              <div className="normal-text">채용보상금 1,000,000원</div>
            </div>
          </div>
        </div>
      </section>
      <div className="main-divider"></div>
      <section className="main-container companylist">
        <div className="heading">
          <span className="bold">#급성장</span>📈 중 회사들을 모아봤어요
        </div>
        <div className="companylist">
          <div className="main-company-card">
            <img src={company1} className="main-company-img"/>
            <div className="main-company-description">
              <div className="wrap">
                <img src={examplelogo} className="main-company-logo"/>
                <div className="card-text-wrap2">
                  <div className="cardhead">머스트잇</div>
                  <div className="card-industry">IT,컨텐츠</div>
                </div>
              </div>
              <button className="button-follow">팔로우</button>
            </div>
          </div>
          <div className="main-company-card">
            <img src={company1} className="main-company-img"/>
            <div className="main-company-description">
              <div className="wrap">
                <img src={examplelogo} className="main-company-logo"/>
                <div className="card-text-wrap2">
                  <div className="cardhead">머스트잇</div>
                  <div className="card-industry">IT,컨텐츠</div>
                </div>
              </div>
              <button className="button-follow">팔로우</button>
            </div>
          </div>
        </div>
      </section>
      <section className="main-container companylist topmg40">
        <div className="heading">
          <span className="bold">#수평적 문화</span>🙌 회사들을 모아봤어요
        </div>
        <div className="companylist">
          <div className="main-company-card">
            <img src={company1} className="main-company-img"/>
            <div className="main-company-description">
              <div className="wrap">
                <img src={examplelogo} className="main-company-logo"/>
                <div className="card-text-wrap2">
                  <div className="cardhead">머스트잇</div>
                  <div className="card-industry">IT,컨텐츠</div>
                </div>
              </div>
              <button className="button-follow">팔로우</button>
            </div>
          </div>
          <div className="main-company-card">
            <img src={company1} className="main-company-img"/>
            <div className="main-company-description">
              <div className="wrap">
                <img src={examplelogo} className="main-company-logo"/>
                <div className="card-text-wrap2">
                  <div className="cardhead">머스트잇</div>
                  <div className="card-industry">IT,컨텐츠</div>
                </div>
              </div>
              <button className="button-follow">팔로우</button>
            </div>
          </div>
        </div>
      </section>
      <div className="main-divider"></div>
      <section className="main-container">
        <div className="heading bold">
          요즘 뜨는 포지션
        </div>  
        <div className="joblist">
          <div className="job-card">
            <img src={defaultjob} className="job-img"/>
            <div className="card-text-wrap">
              <div className="cardhead">[신선하이개발실]프론트엔드 개발자</div>
              <div className="card-company">그린랩스</div>
              <div className="card-location">서울.한국</div>
              <div className="normal-text">채용보상금 1,000,000원</div>
            </div>
          </div>
          <div className="job-card">
            <img src={defaultjob} className="job-img"/>
            <div className="card-text-wrap">
              <div className="cardhead">[신선하이개발실]프론트엔드 개발자</div>
              <div className="card-company">그린랩스</div>
              <div className="card-location">서울.한국</div>
              <div className="normal-text">채용보상금 1,000,000원</div>
            </div>
          </div>
          <div className="job-card">
            <img src={defaultjob} className="job-img"/>
            <div className="card-text-wrap">
              <div className="cardhead">[신선하이개발실]프론트엔드 개발자</div>
              <div className="card-company">그린랩스</div>
              <div className="card-location">서울.한국</div>
              <div className="normal-text">채용보상금 1,000,000원</div>
            </div>
          </div>
          <div className="job-card">
            <img src={defaultjob} className="job-img"/>
            <div className="card-text-wrap">
              <div className="cardhead">[신선하이개발실]프론트엔드 개발자</div>
              <div className="card-company">그린랩스</div>
              <div className="card-location">서울.한국</div>
              <div className="normal-text">채용보상금 1,000,000원</div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Main