import React from "react";
import { useEffect } from "react";
import axios from "axios";

const { kakao } = window;

function Detailcompany() {
  const [intro, setIntro] = React.useState();
  const container = React.useRef(null);

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    let geocoder = new kakao.maps.services.Geocoder();
    console.log(geocoder);

    geocoder.addressSearch(
      `서울특별시 서초구 양재동 290-8 2층 (동산로 75)`,
      function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          console.log(result);
          let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });
          map.setCenter(coords);
        }
      }
    );
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://hayeon-sum.shop/api/postings",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="detailcompany">
      <div className="detailcompany-header">
        <div className="detailcompany-header-innerwrap">
          <div role="img" className="detailcompany-header-logo"></div>
          <h2>에스엔피랩</h2>
          <button className="detailcompany-header-btn">
            <span>팔로우</span>
          </button>
        </div>
      </div>
      <div className="detailcompany-body-innerwrap">
        <div className="detailcompany-jopposition">
          <h3>채용 중인 포지션</h3>
          <div className="detailcompany-joplistwrapper">
            {/* 카드 클릭시 채용 정보 상세페이지 이동 */}
            <a href="/detail" className="detailcompany-joblist">
              <h4>앱/웹 디자이너</h4>
              <h5>채용보상금 1,000,000원</h5>
              <p>상시 채용</p>
              <button className="detailcompany-joblist-btn" disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="13"
                  height="17"
                  style={{ color: "rgb(51, 102, 255)" }}
                >
                  <path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z" />
                </svg>
              </button>
            </a>
            <a href="/detail" className="detailcompany-joblist">
              <h4>앱/웹 디자이너</h4>
              <h5>채용보상금 1,000,000원</h5>
              <p>상시 채용</p>
              <button className="detailcompany-joblist-btn" disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="13"
                  height="17"
                  style={{ color: "rgb(51, 102, 255)" }}
                >
                  <path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z" />
                </svg>
              </button>
            </a>
            <a href="/detail" className="detailcompany-joblist">
              <h4>앱/웹 디자이너</h4>
              <h5>채용보상금 1,000,000원</h5>
              <p>상시 채용</p>
              <button className="detailcompany-joblist-btn" disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="13"
                  height="17"
                  style={{ color: "rgb(51, 102, 255)" }}
                >
                  <path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z" />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="detailcompany-innercompany">
          <h3>회사 소개</h3>
          <div className="detailcompany-innercompany-img-wrap">
            <button className="detailcompany-innercompany-img">
              <img
                src="https://static.wanted.co.kr/images/company/28485/1ak07ugtazqfynus__1080_790.jpg"
                alt="companyoffice1"
              />
            </button>
            <button className="detailcompany-innercompany-img">
              <img
                src="https://static.wanted.co.kr/images/company/28485/mucolkbqrgs3umtc__1080_790.jpg"
                alt="companyoffice2"
              />
            </button>
            <button className="detailcompany-innercompany-img">
              <img
                src="https://static.wanted.co.kr/images/company/28485/zavs64xgmy3aatmy__1080_790.jpg"
                alt="companyoffice3"
              />
            </button>
            <button className="detailcompany-innercompany-img">
              <img
                src="https://static.wanted.co.kr/images/company/28485/zgskq0p861hqfc8r__1080_790.jpg"
                alt="companyoffice4"
              />
            </button>
          </div>
          <p className="detailcompany-innercompany-intro">
            <span>
              SNPLab은 "Security and Privacy Laboratory"를 줄인 것으로,
              삼성전자, 삼성SDS 및 한컴 출신 개발자들이 설립한 보안 및
              개인정보보호 플랫폼 스타트업입니다. 지속성장 가능한 개인정보
              플랫폼 구축을 위해 On-Device 마이데이터 플랫폼을 개발하였으며,
              개인보안 및 개인정보 관련 컨설팅도 제공하고 있습니다. 개인과 기업
              모두에게 도움이 되는 개인정보 에코 시스템을 구현하고자 합니다.
              에스앤피랩은? 흐름을 보고 미래를 설계합니다. 에스엔피랩은 경험
              많은 시니어 프로그래머들로 이루어져 있습니다. 첨단의 기술과 정보
              다루는 기술을 혹독하게 훈련받으며 일해왔습니다. 하루가 다르게
              변화하는 IT 기술의 여러 분야를 다루며, 혁신기술이 변화하는 현장을
              직접 함께 해왔습니다. 그런 만큼 큰 흐름을 예측하고 이에 따라
              비젼을 가지고 미래를 설계할 수 있습니다. 우리는 서로가 멘토이며
              멘티입니다. 우리는 서로 연구하고 배우며 함께 끊임없이 일깨우며
              성장하는 기업입니다. 에스엔피랩의 지붕 아래 모인 팀원들의 공통적인
              성향대로, 서로 존중하고 경청하며 의견을 조율하는 방식이 자연스럽게
              자리잡았습니다. 기꺼이 지식과 정보를 공유하며 팀 구성원들을
              배려하며 일하는 기업입니다. 가장 효율적이고 산업성장을 이루는
              기업은 팀원이 아이디어를 창출하고 기술을 혁신할 수 있는 환경을
              제공하는 기업입니다. 에스엔피랩은 새로운 기업문화를 통해 모두가
              즐겁게 일할 수 있는 기업을 만들 것입니다. 곧 다른 기업들은
              기업경영과 사원경영에 대한 새로운 모델로 에스엔피랩을 주목하고
              따르게 될 것입니다. 개인정보 비즈니스의 새로운 패러다임을 연다
              에스엔피랩은 개인정보를 운용하는 과정만으로도 개인이
              정보비지니스로 수익을 얻는 세상을 만들고자 합니다. 이제껏
              개인정보는 개인 자신의 것임에도 개인이 그 소유권을 제대로 발휘하지
              못하는 것이 실상이었습니다. 지금까지는 각자 자기 정보가 남용되는
              일이 없도록 애쓰며 서비스를 사용할 때마다 ‘개인정보제공 인증앱’을
              깔아 사인을 하죠. 이런 식으로 기업이 개인정보를 가져다 쓰는 것에
              합법성을 부여했습니다. 하지만 이것이 내 정보를 기업에게 내어준
              개인에게 얼마나 이득이 되나요. 또 기업이 서비스를 제공하는
              과정에서 발생한 부가적인 개인정보로 기업은 어떤 혜택을 얻었을까요?
              앞의 질문에는 그렇지 않다, 그리고 뒤의 질문에는 많은 이득이
              기업에게 발생했다는 대답을 드릴 수 있겠습니다. 기업들은 개인이
              로그인을 해서 물건을 사고 검색을 할 때마다 기호와 소비성향에 관한
              다양한 정보를 얻고 이것을 활용하여 더 많은 부가수익을 올리면서
              이득을 얻고 있습니다. 그러나 예측 가능하다시피 이러한 개인정보에
              의한 수익은 거대 기업으로 편중되어 있습니다. 특히 기업은 계속해서
              더 많은 개인정보를 모아서 이를 통해 수익을 얻지만, 실제로
              개인정보를 생산하는 생산자와는 이익을 전혀 공유하지 않습니다.
              에스앤피랩은 이런 불균등한 개인정보의 소비 수익구조를 바꾸고,
              개인정보의 생산자와 소비자가 모두 이익을 얻을 수 있는 새로운
              생태계를 열고자 합니다. 개인정보의 생산자는 생산에 관여한 만큼
              개인정보의 소비에 대한 이익을 나누어 가질 것이며, 개인정보가
              소비되는 방식 또한 투명한 방식으로 바뀌게 될 것입니다. 기업은
              가지고 있는 아이템과 서비스를 소비하는 유효고객층에 대한 정보를
              골라 받아 정확한 타켓마켓팅이 가능할 것이고, 이는 기업의 이익을
              극대화하는 결과로 이어질 것입니다. 개인정보를 유출될까 염려되어
              개인 영역으로 꽁꽁 감추어 두기만 한다면 개인정보는 말 그대로 그냥
              개인의 비밀정보로 아무런 이익을 가져다주지 않습니다. 개인정보를
              소비하는 방식을 투명하게 하되, 개인과 기업이 모두 이익을 얻으며
              소비할 수 있는 안전한 플랫폼을 만들어 그것을 통해 개인정보를
              소비하도록 만든다면, 기존의 개인정보 소비방식은 완전히 대체될
              것입니다. 말할 것도 없이 기업은 법적으로 안전한 정보열람을 통해
              더욱 세밀하게 고객의 니즈에 맞는 맞춤형 서비스 제공이 가능해질
              것입니다. 기업이 개인정보사용과 관련된 각종 규제에 발이 묶여
              있었던 것을 생각해 본다면 새로운 개인정보비지니스모델이 기업발전에
              미치게 될 영향은 그 가치를 가늠하기조차 어렵습니다. 에스엔피랩의
              개인정보 비지니스모델은 지금은 시작단계지만 많은 투자가들이
              블루칩으로 주목하고 있는 사업아이템이며 투자성있는 사업모델을 찾는
              이들이 이미 에스엔피랩이 개발하고 있는 아이템이 갖고 있는 미래성에
              주목하고 있습니다. 에스엔피랩이 만들어가고 있는 새로운
              ‘개인정보비지니스’ 아이템이야말로 4차 혁명산업기에 세상이 요구하는
              혁신성을 갖고 있음을 자신합니다. 에스엔피랩이 세상의 변화를
              주도하고 있음을 의심하지 않습니다.
            </span>
            <br />
            <br />
            <a href="http://snplab.io">http://snplab.io</a>
          </p>
          <button className="detailcompany-innercompany-btn">
            더 보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width="13"
              height="17"
            >
              <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
            </svg>
          </button>
        </div>
        <div className="wrap2">
          <div className="content-header-grey">근무지역</div>
          <div className="content-header">
            서울특별시 서초구 양재동 290-8 2층 (동산로 75)
          </div>
        </div>
        <div className="detail-map" id="map" ref={container}></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Detailcompany;
