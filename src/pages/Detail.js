import React, {useRef, useEffect} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import defaultjob from '../assets/defaultjob.png'
import examplelogo from '../assets/examplelogo.png'

const { kakao } = window;

function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const Job = location.state.job;
  console.log(Job);

  //MAP
  const container = useRef(null);
  useEffect(() => {

    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    let geocoder = new kakao.maps.services.Geocoder();
    console.log(geocoder)
    
    geocoder.addressSearch(`${Job.address}`, function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result)
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        
        const marker = new kakao.maps.Marker({
        map: map,
        position: coords
        });
        map.setCenter(coords);
      }
      
    })

  }, []);

  return (
    <div className='detail-container'>
      <img src={Job.thumbnail? Job.thumbnail : defaultjob} className='detail-head-img'></img>
      <div className="detailhead topmg30">{Job.title}</div>
      <div className="wrap topmg10">
        <div className="detail-company bold">{Job.companyname}</div>
        <div className="divider"></div>
        <div className="detail-location">{Job.region}, {Job.country}</div>
      </div>
      <p className="detail-content topmg30">
      {Job.intro}
      </p>
      <div className="content-header topmg30"> 주요업무 </div>
      <p className="detail-content topmg10 ">
      {Job.maincontent}
      </p>
      <div className="content-header topmg30"> 자격요건 </div>
      <p className="detail-content topmg10 ">
      {Job.subcontent}
      </p>
      <div className="detail-divider"></div>
      <div className='wrap2'>
        <div className="content-header-grey">마감일</div>
        <div className="content-header">상시</div>
      </div>
      <div className='wrap2'>
        <div className="content-header-grey">근무지역</div>
        <div className="content-header">{Job.address}</div>
      </div>
      <div  
      className="detail-map" 
      id="map"
      ref={container}
        > 
      </div>
      <div className='detail-company-box'>
        <div className="wrap">
          <img src={Job.profileimage? Job.profileimage: examplelogo} className="detail-company-logo"/>
          <div className="card-text-wrap2">
            <div className="content-header">{Job.companyname}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;
