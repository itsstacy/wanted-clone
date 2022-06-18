import React from 'react'
import logo from './../assets/logo.png'
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="mainbar">
      <div className="mainbar-nav">
        <div className="mainbar-nav-box">
          <span class="material-icons">menu</span>
          <img 
          src={logo} 
          className="main-logo"
           onClick={() => {
            navigate("/");
          }}>            
          </img>
        </div>
        <div className="mainbar-nav-box">
          <div 
          className="navbar-menu"
          onClick={() => {
            navigate("/");
          }}>채용</div>
          <div 
          className="navbar-menu"
          onClick={() => {
            navigate("/join");
          }}>커뮤니티</div>
          <div className="void"></div>
        </div>
        <div className="mainbar-nav-box">
        <span class="material-icons">search</span>
          {/* login before after */}
          <div 
          className="navbar-menu"
          onClick={() => {
            navigate("/login");
          }}>회원가입/로그인</div>

          <div className="divider"></div>
          <button className="button-company-service">기업서비스</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

