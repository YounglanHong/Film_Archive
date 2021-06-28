# 🎬 Film Archive
## 프로젝트 정보
### 0. 소개

유저가 영화 정보를 검색하고, 좋아하는 영화나 시청한 영화에 대한 리뷰를 남길 수 있는 서비스

🔗 배포 링크 :  https://film-archive.herokuapp.com/

### 1. 설치 및 사용 방법

(1) 코드 복사

> 본 레파지토리를 https://github.com/YounglanHong/Film_Archive.git 주소를 활용하여 로컬 환경에 clone 합니다. 
```js
git clone https://github.com/YounglanHong/Film_Archive.git
```
(2) 패키지 설치
```js
// 클라이언트와 서버 폴더에서 각각 패키지 설치를 진행합니다.
// cd Client & cd Server
npm install
```
(3) 실행
```js
// film-archive client 
cd Client
npm start

// film-archive server
cd Server
npm start
```

### 2. 환경 설정

### 클라이언트

1. API 설정

> https://developers.themoviedb.org/3/

   * 🔗 [TMDB](https://www.themoviedb.org/) 계정 설정 페이지에서 `API key`를 신청합니다.

```js
// src/config.js
// movie api
export const API_KEY = "YOUR_API_KEY";
export const API_URL = "https://api.themoviedb.org/3/";
export const IMAGE_URL = "https://image.tmdb.org/t/p/";
```

2. Proxy 설정

* `CORS` 에러를 방지하기 위해 `Proxy`를 미들웨어로 설정합니다.
    * 참고: 🔗 [CRA config proxy manually](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually)

```js
npm install http-proxy-middleware --save
```

```js
// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
```

### 서버
1. 인증 secretKey 설정
> userId + `secretKey` = token

```js
// config/secretKey.js
export const secretKey = "YOUR_SECRET_KEY";
```

2. mongoBD와 연결

    * 참고: 🔗 [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)

```js
// config/dev.js
module.exports = {
  mongoURI:
    "mongodb+srv:YOUR_CONNECTION_STRING",
};
```
