import React from 'react'
import defaultjob from '../assets/defaultjob.png'
import examplelogo from '../assets/examplelogo.png'

function Detail() {
  return (
    <div className='detail-container'>
      <img src={defaultjob} className='detail-head-img'></img>
      <div className="detailhead topmg30">[신선하이개발실]프론트엔드 개발자</div>
      <div className="wrap topmg10">
        <div className="detail-company bold">그린랩스</div>
        <div className="divider"></div>
        <div className="detail-location">서울.한국</div>
      </div>
      <div className="detail-content topmg30">
      큐피스트는 사람들이 ‘만남을 재밌고 쉽게’ 할 수 있도록 ‘글램’을 운영하고 있습니다.
      작년 시리즈 A 투자 유치를 성공적으로 마치고 빠른 커브곡선을 그리며 ‘글램'은 국내 1위 데이팅 앱을 넘어, 소셜 엔터테인먼트 서비스로 성장 중입니다. 
      저희는 높은 수준의 디자인과 월드와이드 사용자 경험을 추구하면서 다양한 기술적 챌린징을 받아왔고, 이를 통해 수준 높고 깊은 기술력을 가지고 있습니다. 또한 글로벌 데이팅과 라이브 스트리밍을 넘나드는 신규 기능을 비롯한 앱 최적화와 로컬라이징 등 다양한 도전과제가 기다리고 있습니다.
      </div>
      <div className="content-header topmg30"> 주요업무 </div>
      <div className="detail-content topmg10 ">
      • GLAM React-Native 앱 서비스 개발<br />
      • React-Native 프로젝트 아키텍처 설계 고도화 및 방향 제시<br />
      • 팀 내에 React-Native 프레임워크 지식 전파<br />
      </div>
      <div className="content-header topmg30"> 자격요건 </div>
      <div className="detail-content topmg10 ">
      • 2년 이상의 앱 개발 경력이 있거나 그에 준하는 실력을 갖추신 분<br />
      • JavaScript/TypeScript, TypeScript Style에 능숙하신 분<br />
      • Android/iOS 다양한 환경과 디바이스에 적합한 UI/UX에 전반적인 이해를 갖춘 분<br />
      • React-Native 및 React-Query 또는 Redux 사용 경험이 있는 분<br />
      • CodePush 등을 이용한 효율적인 배포 관리 경험이 있는 분<br />
      • 기술 중심이 아닌 유저 중심적인 태도<br />
      • 요구사항에 대한 빠른 분석과 피드백이 가능하신 분<br />
      • 배움에 대한 열정을 갖고, 지속적이고 효과적으로 피드백을 주고 받는 분<br />
      </div>
      <div className="detail-divider"></div>
      <div className='wrap2'>
        <div className="content-header-grey">마감일</div>
        <div className="content-header">상시</div>
      </div>
      <div className='wrap2'>
        <div className="content-header-grey">근무지역</div>
        <div className="content-header">서울특별시 강남구 논현로85길 70 14F</div>
      </div>
      <div className='detail-map'>
      </div>
      <div className='detail-company-box'>
        <div className="wrap">
          <img src={examplelogo} className="detail-company-logo"/>
          <div className="card-text-wrap2">
            <div className="content-header">머스트잇</div>
            <div className="card-industry">IT,컨텐츠</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;
