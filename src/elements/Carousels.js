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
      </div>
      <div className="banner">
        <img src= {banner2}/>
      </div>
      <div className="banner">
        <img src= {banner3}/>
      </div>
      <div className="banner">
        <img src= {banner4}/>
      </div>
      <div className="banner">
        <img src= {banner5}/>
      </div>
      <div className="banner">
        <img src= {banner6}/>
      </div>
      <div className="banner">
        <img src= {banner7}/>
      </div>
      <div className="banner">
        <img src= {banner8}/>
      </div>
    </Slider>
  )
}

export default Carousels;