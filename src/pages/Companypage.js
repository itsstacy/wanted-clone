import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import defaultjob from '../assets/defaultjob.png';
import styled from "styled-components";
import {getCompanypageLists, expireJob} from '../redux/modules/feedSlice';

function Companypage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  //get token
  const access_token = localStorage.getItem("token");

  const Joblist = useSelector((state)=> state.Feed.joblist);
  const Companylist = useSelector((state)=> state.Feed.companylist);
  const thecount = useSelector((state)=> state.Feed.trueCount);
  console.log(thecount);
  

  const [count, setCount] = useState(0);
 
  // const rendercount = () => {
  // const active = Joblist&& Joblist?.filter(job => job.status == true);
  // setCount(active.length);
  // console.log(count);
  // }

  useEffect(() => {
  window.scrollTo(0, 0); 
  dispatch(getCompanypageLists(access_token));
  
  },[])


  const confirmExpire = (job) => {
    if (window.confirm("채용공고를 정말로 마감할까요?")) {
      const JobData = {
        status: job.status,
        postingid:job.postingid,
        token: access_token
      }
      console.log(JobData);
      dispatch(expireJob(JobData));
    };
  }
  
  return (
    <div className='mypage-container'>
      <div className='mypage-header'>
        <div className='header-block'>
          <div className='block-number'>{Joblist.length}</div>
          <div className='block-text'>전체</div>
        </div>
        <div className='header-block'>
          <div className='block-number'>{thecount}</div>
          <div className='block-text'>채용중</div>
        </div>
        <div className='header-block'>
          <div className='block-number'>{Joblist.length-thecount}</div>
          <div className='block-text'>채용완료</div>
        </div>
      </div>
      <div className='mypage-content'>
        {Joblist.map((job,idx)=>{
          // if(job.status === true) {
          //   console.log(job.status)
          //   count.push(job.status);
            
          // };
          // setTotalcount(count.length);
        
          return(
            <Jobcard id="job-card" status={job.status}>
              <div className="card-wrap">
              <img src={job.thumbnail? job.thumbnail:defaultjob} className="companypage-job-img" id="companypage-job-img"/>
              <div className="overlay">
                <div className="tag">
                  
                  
                  {job.status? (
                  <>
                    <Button1 
                    class="material-icons"
                    onClick={()=>{
                      navigate(`/edit`, { state: {job} });
                    }}>✏️ 공고수정하기</Button1>
                    <Button1
                    class="material-icons"
                    onClick={()=>{
                      confirmExpire(job)
                    }}
                    >✔️ 채용완료하기</Button1>
                  </>
                  ): (
                    <>
                      <p className="delete-text">채용완료된<br/>공고입니다.</p>
                    </>
                  )
                  }

                </div>
              </div>
              </div>
              <div className="card-text-wrap3">
                <div className="cardhead">{job.title}</div>
                <div className="card-location">{job.region}, {job.country}</div>
                <div className="normal-text">{job.position === "1" ? "프론트엔드" : "백엔드"}</div>
              </div>
            </Jobcard>
          )
        })}       
      </div>
    </div>
  )
  
}

export default Companypage;


const Jobcard = styled.div`
  width: 240px;
  height: 330px;
  cursor: pointer;
  padding: 8px !important;
  justify-content: space-around;
  border-radius: 5px;
  background-color: ${(props)=> props.status === false ? "#d7d7d7" : "#e4f1fd"};
  &:hover {
    background-color:  ${(props)=> props.status === false ? "#d7d7d7" : "#c6e4ff"}; 
  }
`

const Button1 = styled.div`
  width: 150px;
  padding: 9px;
  margin: 13px auto;
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 10px;
  color: #333;
  font-size: 0.95rem;
  font-weight: bold;
  background-color: white;
  &:hover {
    background-color: #e2f0fa;
    color: #006bee;

  }
`
