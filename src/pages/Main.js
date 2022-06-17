import React from 'react'
import Carousels from '../elements/Carousels';
import logoai from '../assets/logo_ai.png'

function Main() {
    
  return (
    <div className="mainpage">
      <Carousels/>
      <section className="main-container joblist">
        <div className="heading">
          <img src={logoai} className="logoai"/> 가 제안하는 합격률 높은 포지션
        </div>
        <div className="joblist-cards"></div>
      </section>

      <section className="main-container companylist">
        <div className="heading">
          <span className="bold">#급성장</span>📈 중 회사들을 모아봤어요
        </div>
        <div className="joblist-cards"></div>
      </section>
      <section className="main-container companylist">
        <div className="heading">
          <span className="bold">#수평적 문화</span>🙌 회사들을 모아봤어요
        </div>
        <div className="joblist-cards"></div>
      </section>

    </div>

  );
}

export default Main