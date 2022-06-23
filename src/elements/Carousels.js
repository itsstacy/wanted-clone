import React from 'react'

import "../styles/slick.css";
import "../styles/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";
import banner4 from "../assets/banner4.webp";
import banner5 from "../assets/banner5.webp";
import banner6 from "../assets/banner6.webp";
import banner7 from "../assets/banner7.webp";
import banner8 from "../assets/banner8.webp";

function Carousels() {

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  };

  return (
    <Slider {...settings}>

      <div className="banner">
        <img src= {banner1}/>
        <div className="banner-box">
          <h3>인턴십도 원티드에서,</h3>
          <p>다양한 경험과 커리어를 시작하세요!</p>
        </div>
      </div>
      <div className="banner">
        <img src= {banner2}/>
        <div className="banner-box">
          <h3>웰리시스 전 직군 채용 중!</h3>
          <p>14개국 진출한 디지털 헬스 웨어러블</p>
        </div>
      </div>
      <div className="banner">
        <img src= {banner3}/>
        <div className="banner-box">
          <h3>택스테크 스타트업 '삼쩜삼'</h3>
          <p>개발자 포함 전 직군 적극 채용 중!</p>
        </div>
      </div>
      <div className="banner">
        <img src= {banner4}/>
        <div className="banner-box">
          <h3>종합 뷰티/피트니스 플랫폼</h3>
          <p>라이픽 - 전 직군 적극 채용중</p>
        </div>
      </div>
      <div className="banner">
        <img src= {banner5}/>
        <div className="banner-box">
          <h3>올 여름, 커리어는 화해에서</h3>
          <p>#지금바로 #화해하세요!</p>
        </div>
      </div>
      <div className="banner">
        <img src= {banner6}/>
        <div className="banner-box">
          <h3>복지는 좋은데, 커리어는?</h3>
          <p>유명 IT기업 개발자가 선택한 회사</p>
        </div>
      </div>
      <div className="banner">
        <img src= {banner7}/>
        <div className="banner-box">
          <h3>첫 월급날. 천만 원 꽂힌다!</h3>
          <p>초봉5천,보너스1천,연봉 20% 인상</p>
        </div>
      </div>
      <div className="banner">
        <img src= {banner8}/>
        <div className="banner-box">
          <h3>스타일커머스 플랫폼 에이블리</h3>
          <p>백엔드엔지니어 적극 영입 중!</p>
        </div>
      </div>
    </Slider>
  )
}

export default Carousels;