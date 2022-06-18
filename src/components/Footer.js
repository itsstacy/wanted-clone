import React from 'react'
import logo2 from '../assets/logo2.png'

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-menu">
          <img src={logo2} className="footer-logo"/>
          <div className="footer-menu-item">기업소개</div>
          <div className="footer-menu-item">이용약관</div>
          <div className="footer-menu-item">개인정보 처리방침</div>
          <div className="footer-menu-item">고객센터</div>
        </div>
        <div className="main-divider2"></div>
        <div className="footer-text">
        (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147 <br/>
        유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118 <br/>
        © Wantedlab, Inc.
        </div>
      </div>
    </>
  )
}

export default Footer;