개발블로그 프로젝트

## 2023년 10월 10일
1. 개발블로그 제작 프로젝트 시작
2. react 프로젝트 생성
3. 노션에 프로젝트 계획서 작성
   제작이유: 
   내가 커스터마이징 할 수 있는 개발블로그를 갖고싶다.
   블로그는 게시판 형식의 웹 페이지이므로 블로그 제작에 성공한다면 게시판 제작 실력이 향상될 것 같다고 생각한다.
   노션에 정리해둔 TIL 문서들을 내 개발블로그에 옮기고싶다.

   사용기술스택:
   - HTML: 웹 페이지의 뼈대가 되는 기술
   - CSS: 웹 페이지의 디자인을 담당하는 기술
   - Javascript: 웹 페이지의 동적인 부분을 담당하는 기술(가능하다면 Typescript로 리팩토링 하고싶다.)
   - React: 컴포넌트 기반 구현을 통해 재사용성이 높고 Virtual DOM을 사용해 하면 업데이트가 빠르기 때문, 또한 이용자가 많은 라이브러리이므로 활발한 지식공유와 커뮤니티 덕분에 모르거나 실수하는 부분을 찾기 용이하다.
   - Redux-toolkit: state를 이용해 상호작용을 만들어내는 React에 반했는데 그걸 더 효율적으로 관리할 수 있게 해주기때문에 사용한다.

   디자인:
   - Figma: 아직 잘 사용하는 방법은 모르지만 유명 웹 사이트의 페이지를 캡쳐해 레이아웃을 구분하여 grid와 flex 레이아웃중 무엇이 더 적합할지 고려하고 퍼블리싱 전에 직접 설계 및 디자인을 하였다.
   nike의 웹 사이트를 벤치마킹하고 디자인을 그대로 따라하는게 아닌 블로그라는 주제에 맞게 스스로 디자인을 고쳐보고 레이아웃을 최적화 해보았다.

4. 기능구현
     - 퍼블리싱 진행중
     - flex와 grid를 두개 같이 쓰는 방식을 채택하려 했으나 flex의 wrap을 통해 화면이 축소된다면 요소가 줄바꿈을 하는게 반응형에 더 어울릴 것 같아서 flex를 레이아웃으로 채택함
        https://webactually.com/2018/07/02/css-%EA%B7%B8%EB%A6%AC%EB%93%9C-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EB%AA%A8%EB%B2%94-%EC%82%AC%EB%A1%80/
     - className을 작명하는데 중복되는 className을 작명한걸 모르고 css가 정상적으로 적용되지 않아 시간을 많이 허비했다. class 작명법인 OOCSS와 BEM을 사용해 작명했다.
        - OOCSS: 뼈대가 되는 속성을 담는 class와 개별적으로 추가 적용하는 속성을 담는 class 두가지로 나누는 방식
        - BEM: 특정 기능을 하는 컴포넌트를 블럭으로 묶어 기능명을 class로 작명하는 방식
     - 깃허브에 이미지 파일을 저장하는 방법을 배웠다.
        이미지 파일을 저장하고자 하는 리포지토리를 만들고 issues를 열어 이미지를 드래그앤드랍 하고 내부에 작성된 경로(주소값)을 복사해 readme파일에 넣는다. 이후 readme에 있는 이미지를 클릭해 주소를 복사해 이미지를 사용하고싶은 img태그 src안에 주소를 붙여넣는다.
        https://ndb796.tistory.com/557
     - 글자가 width를 넘겼을때 처리하는 방법을 배웠다.
        text-overflow : ellipsis -> width를 넘긴 글자를 ...으로 표시하는 속성이다.
        text-overflow를 쓰기 위해서는
        white-space: nowrap -> 줄바꿈 방지
        overflow: hidden -> 컨텐츠 영역만 보여줌
        위 두가지 속성을 같이 써줘야한다.

5. 내일 할 것
     - 퍼블리싱 완성(CSS적용)

## 2023년 10월 11일
1. 기능구현
     - 퍼블리싱 HTML/CSS 
     - logo 이미지 제작 및 아이콘 파일 깃허브 업로드
     - reset.css에 대한 이해와 적용. 브라우저마다 다른 CSS 기본서식이 있어서 모든 브라우저에서 동일한 CSS 디자인 적용(크로스 브라우징)을 위해 모든 브라우저의 CSS 기본값을 reset해주는 목적으로 사용한 CSS 파일이다.
     - :root를 사용해 빈번하게 사용되는 속성값, 색상값, 폰트사이즈 등을 변수에 작명하여 저장하고 사용하였다. 이후 다크모드 구현때 더 효율적으로 사용될 것으로 생각된다.
     https://velog.io/@teo/2022-CSS-Reset-%EB%8B%A4%EC%8B%9C-%EC%8D%A8%EB%B3%B4%EA%B8%B0
     - Post요소에 box-shadow와 :hover 적용, nav-list 요소들에 :hover 적용
     - 다크모드 토글 (JS+React+CSS미구현)
     - CSS 작업은 의도한대로 작동하지 않는 부분이 가장 어려웠다. 그래도 오랜시간 작업을 진행하니 결과물이 눈에 보여 성취감은 느껴진다. 또한 요소에 속성을 적용할 때 예전에는 요소를 요소로 감싸거나 묶어주는 방식을 채택하는것을 이해하지 못했으나 요소로 감싸거나 묶어줌으로써 화면상 위치, flex 레이아웃을 더 원활하고 의도적으로 조작할 수 있음을 깨달았다.
     - 추가적으로 해보고싶은 CSS 기술(@keyframes, svg스크롤애니메이션)
     @keyframes와 svg스크롤애니메이션은 기술블로그라는 목적에 접합한 기술이 아니기때문에 추후 두가지 기술을 쓰기위한 프로젝트를 만들어보자.

2. 내일 할 것
     - 각 요소들을 함수형 컴포넌트로 묶어 컴포넌트화 하기
     - Post 보기 페이지, Post 글 작성 페이지 퍼블리싱
     - DB에 작성한 글 저장하는 방법 찾아보기

## 2023년 10월 12일 ~ 13일
1. 기능구현
     - Post 클래스 :hover 속성 변경. 이미지 hover시 이미지의 scale 값이 변경되는 css를 적용했었는데 그렇다보니 이미지가 아닌 Post의 글제목을 hover했을때 이미지의 scale이 변하지 않는 문제점을 발견했다.
해결방법이 떠오르지않아 네이버 메인화면의 네이버 쇼핑 상품 div에서 글제목 hover시 이미지의 scale이 변하는 기능을 발견해 크롬 개발자모드로 코드를 열어 비교해보았다.
네이버에서는 div로 이미지와 글제목을 묶어주고 div에게만 hover를 주고 div hover시 이미지의 scale이 변하는 css 결합자를 이용해 문제를 해결한걸 확인했다.
그래서 내 프로젝트에 적용시켜보니 Post의 글제목에 hover시 이미지가 scale이 되었다.
잘 모르겠을땐 대기업의 코드를 분석해보는 방법도 좋은 것 같다.

     - HTML 컴포넌트화. 코드 가독성과 코드 재사용성을 높이기 위해 App.js안에서 작성했던 메인페이지 관련 퍼블리싱 코드들을 컴포넌트화 하여 import했다.

     - CSS styled-components화
     styled-components의 사용에 대해서는 고민해보았다.
     일단 styled-components은 CSS-in-Js 스타일 기법으로
     기존 CSS, SCSS의 단점
      1. 전역관리
         - CSS파일은 전역적으로 관리해야하는데 다른 디렉토리에서 작업을 하더라도 해당 파일이 또 다른 디렉토리에 영향을 미칠 수 있다.(오염)
      2. 유지보수
         - 전역관리는 모듈화가 미흡하다는 의미이므로 작업이 크고 고도화 될수록 유지보수에 더 많은 시간과 비용을 발생시킨다.

     CSS-in-JS의 장점
      1. CSS의 컴포넌트화로 스타일시트의 파일을 유지보수 할 필요가 없어진다. CSS 모델을 문서 레벨이 아닌 컴포넌트 레벨로 추상화한다.(모듈성)
      2. JS와 CSS사이의 상수와 함수를 쉽게 공유할 수 있다. 예시로 React에서 props를 활용한 조건부 스타일링이 가능해진다.
      3. 현재 사용중인 스타일만 DOM에 포함한다.
      4. CSS-in-JS는 짧은 길이의 유니크한 클래스를 자동으로 생성하기 때문에 코드 경량화의 장점이 있다.

     CSS-in-JS의 단점
     1. 별도의 라이브러리를 설치해야 하므로 번들 크기가 커진다.
     2. 인터랙티브 페이지일 경우 CSS 파일을 따로 관리하는 방법에 비해 느린 성능을 보여줄 수 있다.
       - FOUC(Flash of unstyled content): 브라우저에 보여줄 것들이 많아짐에 따라, 점차적으로 속도가 느려지는데 특히 컴포넌트가 렌더링되며 형태가 잡히므로 원형의 모습이 잠깐 노출되는 현상인 FOUC가 나타난다.
       - FOUC를 해결하는 방법으로는 SSR 단계에서 스타일링을 내려주면 된다.
       https://darrengwon.tistory.com/746
  
  위 장단점을 비교해 보았을 때 Styled-components를 사용하기로 결정했다.
  
  Styled-components를 사용할때 이후 장점2번인 조건부 스타일링에 관해 고민이 생겼다.
  Post의 Thumbnail img를 서버에서 받아와 사용해야할텐데 두가지 방식중 뭘 선택해야할까?
  1. Post 컴포넌트 안에서 src를 넣어두고 부르는 방식을 사용해야할까?
  2. styled-component안에서 background-image: url로 부르는 방식을 사용해야할까?
      - 우선은 두개의 PostBox를 만들고 각각 1번과 2번을 적용시켰다.
      - 1번의 경우 img의 스타일값을 주기 위해 어차피 styled-component를 만들어야하는데 img srt를 styled-component 밖에서 불러오다보니 외부에서 서버의 주소값을 쉽게 불러올 수 있을 것 같아 보안에 위험이 있어보였다.
      - 2번의 경우 background-image의 src도 styled-component안에서 불러오니 background와 관련된 속성들을 묶어서 코드 가독성이 좋고 개발자모드에서 쉽게 코드가 보여지지 않았다. 그래서 2번을 채택했다.
      - 또한 styled-component안에서 props를 적용하는 방법인 Adapting based on props으로 인해 서버에서 src를 받아오기도 간편했다.
      - 추가로 공식문서에서 Pseudoelements, pseudoselectors, and nesting를 읽어보았는데 &를 사용해 :hover를 적용할 수 있다는걸 배웠다. &는 styled가 정의하고 있는 컴포넌트를 가리킨다.

2. 다음에 할 것
   - PostPage 퍼블리싱, 리액트 라우터 연결
   - 다크모드 구현
   - DB에 작성한 글 저장하는 방법 찾아보기
  
## 2023년 10월 14일 ~ 16일
1. PostPage 퍼블리싱, 리액트 라우터 연결 완성
2. 라이브러리 및 Typescript, mdx 개발 환경 구축
   - post 게시 및 보여주기를 git readme나 velog 글작성처럼 구현하기를 원해서 조사해본결과 react-markdown 라이브러리를 사용해 구현할 수 있다는걸 찾았다.
      https://github.com/remarkjs/react-markdown
      https://www.npmjs.com/package/react-markdown
   - react-markdown에서 typescript를 지원한다는 소개를 보고 typescript가 궁금해졌다.
      대규모 프로젝트나 일반 프로젝트에서 JS의 Dynamic typing으로 인한 오류를 예방해준다니 미리 연습해보면 좋을 것 같아 이번 프로젝트에 급하게 추가하려 한다.
   - 개발 환경 구축에 긴 시간을 소모했다. Typescript를 기존 CRA 프로젝트에 추가하려고 하니 궁금증이 생겨 더 오래걸렸다. 신규 CRA 프로젝트에 Typescript를 설치하는것과 기존 CRA 프로젝트에 Typescript를 설치하는것에 어떤 차이가 있는지 궁금해 각각 테스트 폴더를 만들어 설치해보았고 기존 CRA 프로젝트에 설치하는 경우 js파일이 자동으로 tsx, ts로 변하지 않았으며 tsconfig.json도 없었다. 그 외에는 신규 CRA 프로젝트와 기존 CRA 프로젝트의 차이점이 없다는걸 배웠고 node_modules는 파일 용량이 큰데 어떻게 확인하지 싶었는데 이런경우 npm i를 터미널에 입력할때 node_modules가 package.json에 있는 라이브러리를 확인하고 자동으로 Typescript를 추가해줬다. 이제 정말 구현만 하면 끝난다.
   - MERN에 대한 정보를 찾아봤다. (MongoDB, Express, React, Node.js) 주니어개발자인 내가 저걸 다 하는것보다는 React를 좀더 명확하게 잘하는게 좋겠다 생각되어 이번 프로젝트에서는 서버와 DB 없이 Post의 데이터를 프로젝트 폴더에 담아 구현하려고한다.(시간 여유가 된다면 서버와 DB도 해볼것)
   - 추가로 RESTful API에 대해 알게되었다. 데이터 처리, 유저 검사 등을 서버에서 해주는데 그런 기능을 하는 함수를 API라고 부른다(간단히 말하면 기능을 구현해주는 간단버튼). API는 URL(엔드포인트라고 부른다)을 통해 method를 요청하는데 이걸 HTTP 요청(HTTP method)라고한다. 근데 API의 method인 GET, POST, PUT, UPDATE, DELETE를 각각 다른 HTTP에 요청하면 유지보수와 기능확장이 어렵다. 그래서 이걸 해결하려고 나온게 RESTful API다. 간단하게 원칙을 얘기하면 URL과 method가 일관성 있고, 유저가 서버역할을 담당하거나 DB를 직접 만지지못하게 하고, method는 각각 독립적으로 처리되어야하고, 서버가 보내는 자료들은 캐싱이 가능해야한다.(캐싱은 요즘 자동이라 신경 안써도 된다고한다.)
      프론트엔드가 해야하는 URL 이름지을때 원칙은
      1. 명사위주로 구성
      2. 띄어쓰기는 - 사용
      3. 파일 확장자 쓰지않기(.html같은거)
      4. 하위 문서들을 뜻할때는 / 기호 사용하기
      예시) facebook.com/bbc/photos

## 2023년 10월 17일 ~ 23일
1. toast-ui/react-editor 라이브러리 설치 및 기능구현(성공)
   - markdown 파일을 웹 브라우저에서 만들기 위해 markdown-editor 라이브러리를 설치했다.
   - 정상적으로 작동한다.(사용법은 노션에 정리되어있다. 이후 devlog 웹에 게시할 예정)
2. react-markdown 라이브러리 설치 및 기능구현(실패)
   - markdown 파일을 컴포넌트에 변수를 import 하는 방식으로 구현하려고 한다.
   - markdown-editor를 사용해 md파일을 만들고 해당 md파일을 컴포넌트에 집어넣어보려 했으나 작동하지 않는다.
   - react-markdown 공식 깃허브를 읽어보았지만 관련해서 나오는건 없었고 구글에서도 next.js나 Gatsby를 활용하여야만 md파일 불러오기가 가능했다. 두개를 사용하지 않고는 markdown을 보여줄 컴포넌트 안에서 변수 안에 markdown을 작성하고 변수를 집어넣게 하기때문에 목적과 맞지 않았다.
   - 유튜브, 구글, 공식문서 전부 찾아봤지만 방법이 없어 Gatsby를 활용해 만들어보려고 한다.
3. 다음에 할 것
 - Gatsby로 리액트 프로젝트 제작 방법 찾아보기
 - Gatsby 공식문서 읽어보기

## 2023년 10월 27일 ~ 29일
1. Gatsby를 사용해 블로그 구현을 위해 Gatsby 공식문서 읽어보기
   - JAM stack의 개념을 배우기 앞서 기술을 사용하는 이유를 알기위해 웹의 역사, SSR, CSR, TTV, TTI, SSG에 대해 공부했다.
   - 이후 JAM stack에 대해 이해하고 Gatsby 공식문서를 읽어보며 사용법을 익혀보고있다.
   - Gatsby와 Next.js중 gatsby를 선택한 이유는 Next.js는 정적 사이트 생성 기능 + SSR 프레임워크지만 Gatsby는 서버 없이 정적 사티으 생성 기능만 있는 프레임워크기 때문에 서버가 필요없는 블로그, 포트폴리오, 기업 소개 페이지에 적합하므로 Gatsby를 선택했다. 또한 공식문서가 굉장히 친절하다.
2. Gatsby로 리액트 프로젝트 제작 방법 찾아보기
   - 올리브영 테크블로그에서 Gatsby를 사용한 기술블로그 제작에 관한 글을 읽어보던중 GraphQL을 저장하는 프로젝트 구조에 대해 보게되었다. GraphQL이 수치를 그래프로 표시해주는 라이브러리라고 생각하고 궁금해 찾아봤는데 전혀 달랐다.
   - 카카오 테크블로그에서 설명하길 GraphQL은 SQL(Structed Query Language)와 마찬가지로 쿼리 언어인데 SQL은 데이터베이스 시스템에 저장된 데이터를 효율적으로 가져오는 것이 목적이고 GQL은 웹 클라이언트가 데이터를 서버로부터 효율적으로 가져오는 것이 목적이다. 즉 SQL은 백엔드 시스템에서 작성하고 GQL은 클라이언트 시스템에서 작성한다.

## 2023년 10월 30일
1. CRA를 Gatsby로 migaration하기
   - CRA를 Gatsby로 교체하려는데 Gatsby는 migration이 불가능하고 새로운 프로젝트에 설치하고 기존 CRA의 컴포넌트를 옮겨줘야한다고 한다.
   - 굉장히 비효율적으로 생각되어 다른 방안인 Next.js를 사용해보려 한다.
2. 다음에 할 것
   - Next.js로 markdown post 작성 가능한지 조사하고 가능하면 Next.js로 진행하기

## 2023년 10월 31일
1. Next.js로 markdown post 작성 가능 여부
   - contentlayer와 Next.js를 사용하면 가능하다는걸 찾았다. Next.js로 진행하자.
2. CRA를 Next.js로 migration하기
   - migration이 가능하다. 공식문서에서도 관련한 정보가 있다.
   https://nextjs.org/docs/app/building-your-application/upgrading/codemods#migrate-from-cra
   - migration 하는게 더 비효율적인 것 같다. next.js로 프로젝트를 생성하고 기존 CRA 프로젝트의 컴포넌트만 가져오자.

## 2023년 11월 1일 ~ 13일
1. Next.js로 migration(구현완료)
2. contentlayer로 mdx 파일 동기화(구현완료)
3. mdx thumbnail, img 기능(구현완료)
4. 사이드바 삭제 후 간소화(퍼블리싱 완료)
5. rehype, remark 라이브러리 설치(구현완료)
6. rehype-pretty-code 라이브러리 적용(구현완료)
7. 블로그 게시글 html부분 tailwindCss로 수정하기(미구현)
8. rehype-slug 공부하고 블로그 게시글화면 우측 index 기능 구현(미구현)
9. 좌측 sidebar post.tag와 연동하여 태그별로 게시물 보여주는 기능 구현(미구현)
10. 검색창 posts/mdx 파일 내용으로 검색되도록 하는방법 찾아보기(미구현)
11. 다크모드(미구현)
12. contentlayer의 post변수를 redux-toolkit의 store에 저장해 상태관리 하기(미구현)

## 2023년 11월 14일
1. 사이드바 기능구현(퍼블리싱 완료)
   - map 함수 사용해서 post 오브젝트의 tag속성만큼 반복되도록 구현할것
   - state의 상태관리를 통해 tag속성값을 가져올 수 있도록 상태관리 라이브러리 적용방법 찾아보기

## 2023년 11월 21일
1. 사이드바 기능구현(구현완료)
   - usePathname hook을 사용해 동적라우팅을 통한 현재 경로의 tag값과 li탭의 tag값이 같을경우 background-color를 변경하도록 했다.
   - Set함수와 sort함수를 사용해 중복된 tag 값을 제거해 사이드바의 tag가 중복되지 않고 정렬되도록 했다.
2. tag에 따른 postCard 구현(구현완료)
   - usePathname hook을 사용해 동적라우팅을 통한 현재 경로의 tag값과 일치하는 tag를 가진 post들을 변수에 담고 filter와 삼항연산자를 사용해 tag별로 postCard를 묶어서 나오게 했다.
3. tailwindcss 커스텀 color 설정(구현완료)
4. 디자인 수정(완료)
5. contentlayer mdx파일을 html로 변환중 remarkGfm 최신버전과 충돌하는 오류발견
   - https://github.com/contentlayerdev/contentlayer/issues/558 공식문서 issue 참조
   - remarkGfm의 정확한 용도 파악후 대체 라이브러리를 찾거나 버전다운을 할예정
6. post페이지 html 스타일링하는 방법 찾아보기
7. tailwind로 다크모드 구현하는 방법 찾아보기
8. footer, contact 컴포넌트 만들기
9. redux-toolkit 설치 및 세팅하기

## 2023년 11월 25일
1. 개인 노션 TIL 프로젝트에 정리해둔 문서들 mdx화 해서 개인 블로그 post화 하기
2. remarkGfm 버전다운으로 에러 해결
3. post 페이지 스타일링하기
4. scrollTo함수로 상단이동 버튼 구현
5. rehype-pretty-code로 code block 스타일링, 강조 단어 스타일링
   - 강조 단어는 content에 속하므로 tailwind.config.ts에서 content의 스타일링을 담당하는 typography에 별도로 code 스타일링을 한다.