[팀원 정보](https://www.notion.so/f25898987f3045db9ebbe15ebfaf4cc2)

[팀전체 To - do](https://www.notion.so/ec44bffbf6334825aa1b043dff79e579)

## 구현 예정 화면

---

1. 메인 화면 (채용 정보 표시)
2. 채용 상세 페이지
3. 커뮤니티 (실시간 채팅 기능 추가)
4. 기업 서비스 (회사 등록 페이지)
5. 채용공고 등록 페이지

![메인화면 (채용공고 및 회사정보 표시)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/15dfee68-7a41-4c2d-bb99-fded2b9d3eda/Untitled.png)

메인화면 (채용공고 및 회사정보 표시)

![채용공고 상세페이지](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76d23005-766c-427b-bd38-58456bfa4fb8/Untitled.png)

채용공고 상세페이지

![커뮤니티  (실시간 채팅창)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/476761e9-e935-473c-a262-8a8c2137eba6/Untitled.png)

커뮤니티  (실시간 채팅창)

![회사정보 등록, 채용공고 등록 페이지](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb186f9e-ace4-4c7d-90ae-abe786a05ed4/Untitled.png)

회사정보 등록, 채용공고 등록 페이지

[기능 및 페이지](https://www.notion.so/e3148c1a7228420b84be3250975e5e1a)

[원티드 API 설계](https://www.notion.so/acb268ccf9ab4d139f62f086b8d3e175)

*개인회원이 지원한 채용공고가 삭제 or 수정될 경우 마이페이지에 연동되어 표시되게

## 기존 원티드 사이트와 다른점

---

- 회원가입
    - 회원가입 시 프론트엔드/백엔드 선택 옵션을 추가
- 커뮤니티 페이지
    - 게시판 형식이 아닌 실시간 채팅창으로 구성
    
- 나중에 추가하고 싶은 기능(우선순위)
    1. 소셜 로그인 - 김하연
    2. 이메일 인증 - 조세림
    3. 실시간 채팅 - 전영준
    4. 북마크 기능
    

[프론트 README.md](https://www.notion.so/README-md-014828f7d4794e96be7cdc7e71d050c1)

## 트러블 슈팅

---

- 프론트엔드
    - 주소 검색 시 모달창 구현을 하였는데, 검색 완료 후 모달이 남아있어서 일단 뺐습니다.
- 백엔드
    - 기업회원과 개인회원의 db collection이 달라 두 userid에 대한 중복을 고려하지 않았으나 로그인에서 오류 발생 
    → 해결법: 기업회원 userid와 개인회원 userid 중복검사 코드 작성
    - 기업회원 작성자가 게시물을 여러 개 올리려고 할 때 오류 발생 
    → 해결법: mongodb 해당 컬렉션 삭제하고 다시 실행하니 동작함(But, 이 부분은 mongodb 자체문제인지 코드문제인지 더 생각해봐야함)
    - socket.io를 이용한 채팅을 분리하여 구현 후에 프로젝트에 넣으려고 했는데, 아예 뜨지 않음.  [Socket.io](http://Socket.io) 관련 개념을 참고하여 코드 수정하여 에러 고침. 이후 코드에 들어갈 이름에 대해 DB에서 유저 정보를 조회하여 삽입할 예정.
    - 인증안된 토큰입니다.
    - split
