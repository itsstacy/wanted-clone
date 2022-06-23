import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Carousels from '../elements/Carousels';
import logoai from '../assets/logo_ai.png';
import defaultjob from '../assets/defaultjob.png';

import company1 from '../assets/company1.png';
import examplelogo from '../assets/examplelogo.png';

import {getAllLists} from '../redux/modules/feedSlice';


function Main() {
  useEffect(() => {
    dispatch(getAllLists());
    window.scrollTo(0, 0);
  },[])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Joblist = useSelector((state)=> state.Feed.joblist);
  const Companylist = useSelector((state)=> state.Feed.companylist);

  const firstlist = [];
  const secondlist = [];

  for (let i = 0; i < Math.ceil(Companylist.length/2)-(Math.ceil(Companylist.length/2)%2); i++) {
    firstlist.push(Companylist[i]);
  }
  for (let i = Math.ceil(Companylist.length/2)-(Math.ceil(Companylist.length/2)%2); i < Companylist.length; i++) {
    secondlist.push(Companylist[i]);
  }
  console.log(firstlist);
  console.log(secondlist);

  const firstjoblist = [];
  const secondjoblist = [];

  for (let i = 0; i <  Math.ceil(Joblist.length/2)-(Math.ceil(Joblist.length/2)%4); i++) {
    firstjoblist.push(Joblist[i]);
  }
  for (let i = Math.ceil(Joblist.length/2)-(Math.ceil(Joblist.length/2)%4); i < Joblist.length; i++) {
    secondjoblist.push(Joblist[i]);
  }

  console.log(firstjoblist);
  console.log(secondjoblist);

  return (
    <div className="mainpage">
      <Carousels/>
      <section className="main-container">
        <div className="heading">
          <img src={logoai} className="logoai"/> 가 제안하는 합격률 높은 포지션
        </div>  
        <div className="joblist">
          {firstjoblist.map((job,idx)=>{
            return(
              <div className="job-card" onClick={()=>{
                navigate(`/detail/${job.postingid}`, { state: {job} });
              }}>
                <img src={job.thumbnail? job.thumbnail:defaultjob} className="job-img"/>
                <div className="card-text-wrap">
                  <div className="cardhead">{job.title}</div>
                  <div className="card-company">{job.companyname}</div>
                  <div className="card-location">{job.region}, {job.country}</div>
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
          {firstlist.map((company,idx)=>{
            return(
              <div className="main-company-card" onClick={()=>{
                navigate(`/detailcompany/${company.postingid}`, { state: {company} });
              }}>
                <img src={company.image? company.image[0] : company1} className="main-company-img"/>
                <div className="main-company-description">
                  <div className="wrap">
                    <img src={company.profileimage? company.profileimage : examplelogo} className="main-company-logo"/>
                    <div className="card-text-wrap2">
                      <div className="cardhead">{company.companyname}</div>
                      <div className="card-industry">{company.industry}</div>
                    </div>
                  </div>
                  <button className="button-follow">팔로우</button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="main-container companylist topmg40">
        <div className="heading">
          <span className="bold">#수평적문화</span>🙌 회사들을 모아봤어요
        </div>
        <div className="companylist">
          {secondlist.map((company,idx)=>{
            return(
              <div className="main-company-card" onClick={()=>{
                navigate(`/detailcompany/${company.postingid}`, { state: {company} });
              }}>
                <img src={company.image? company.image[0] : company1} className="main-company-img"/>
                <div className="main-company-description">
                  <div className="wrap">
                    <img src={company.profileimage? company.profileimage : examplelogo} className="main-company-logo"/>
                    <div className="card-text-wrap2">
                      <div className="cardhead">{company.companyname}</div>
                      <div className="card-industry">{company.industry}</div>
                    </div>
                  </div>
                  <button className="button-follow">팔로우</button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      
      <div className="main-divider"></div>
      <section className="main-container">
        <div className="heading bold">
          요즘 뜨는 포지션
        </div>  
        <div className="joblist">
        {secondjoblist.map((job,idx)=>{
            return(
              <div className="job-card" onClick={()=>{
                navigate(`/detail/${job.postingid}`, { state: {job} });
              }}>
                <img src={job.thumbnail? job.thumbnail:defaultjob} className="job-img"/>
                <div className="card-text-wrap">
                  <div className="cardhead">{job.title}</div>
                  <div className="card-company">{job.companyname}</div>
                  <div className="card-location">{job.region}, {job.country}</div>
                  <div className="normal-text">{job.position === "1" ? "프론트엔드" : "백엔드"}</div>
                </div>
              </div>
            )
          })}         
        </div>
      </section>
    </div>

  );
}

export default Main