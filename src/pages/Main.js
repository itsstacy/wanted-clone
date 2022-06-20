import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Carousels from '../elements/Carousels';
import logoai from '../assets/logo_ai.png';
import defaultjob from '../assets/defaultjob.png';

import company1 from '../assets/company1.png';
import company2 from '../assets/company2.png';
import company3 from '../assets/company3.png';
import examplelogo from '../assets/examplelogo.png';

import {getAllLists} from '../redux/modules/feedSlice';


function Main() {
  useEffect(() => {
   dispatch(getAllLists());
  },[])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Joblist = useSelector((state)=> state.Feed.joblist);
  const Companylist = useSelector((state)=> state.Feed.companylist);
  console.log(Joblist);
  console.log(Companylist);
  

  return (
    <div className="mainpage">
      <Carousels/>
      <section className="main-container">
        <div className="heading">
          <img src={logoai} className="logoai"/> 가 제안하는 합격률 높은 포지션
        </div>  
        <div className="joblist">
          {Joblist.map((job,idx)=>{
            return(
              <div className="job-card">
                <img src={defaultjob} className="job-img"/>
                <div className="card-text-wrap">
                  <div className="cardhead">{job.maincontent}</div>
                  <div className="card-company">{job.companyname}</div>
                  <div className="card-location">서울.한국</div>
                  <div className="normal-text">{job.position === "1" ? "프론트엔드" : "백엔드"}</div>
                </div>
              </div>
            )
          })}          
        </div>  
      </section>
      <div className="main-divider"></div>
      <section className="main-container companylist">
        <div className="heading">
          <span className="bold">#급성장</span>📈 중 회사들을 모아봤어요
        </div>
        <div className="companylist">
          {Companylist.map((company,idx)=>{
            return(
              <div className="main-company-card">
                <img src={company1} className="main-company-img"/>
                <div className="main-company-description">
                  <div className="wrap">
                    <img src={examplelogo} className="main-company-logo"/>
                    <div className="card-text-wrap2">
                      <div className="cardhead">{company.companyname}</div>
                      <div className="card-industry">IT,컨텐츠</div>
                    </div>
                  </div>
                  <button className="button-follow">팔로우</button>
                </div>
              </div>
            )
          })}
          
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