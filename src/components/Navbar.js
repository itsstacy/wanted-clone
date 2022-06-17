import React from 'react'
import logo from './../assets/logo.png'

function Navbar() {
  return (
    <div className="mainbar">
      <div className="mainbar-nav">
        <div className="mainbar-nav-box">
          <span class="material-icons">menu</span>
          <img src={logo} className="main-logo">            
          </img>
        </div>
        <div className="mainbar-nav-box">
          <div className="navbar-menu">채용</div>
          <div className="navbar-menu">커뮤니티</div>
          <div className="void"></div>
        </div>
        <div className="mainbar-nav-box">
        <span class="material-icons">search</span>
          <div className="navbar-menu">회원가입/로그인</div>
          <div className="divider"></div>
          <button className="button-company-service">기업서비스</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

