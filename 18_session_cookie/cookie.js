const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 9000;

app.set('view engine', 'ejs');

// 미들웨어 등록
// app.use(cookieParser()); //일반쿠키

const COOKIE_SECRET_KEY = 'this is my secret key';

app.use(cookieParser(COOKIE_SECRET_KEY)); // 암호화 쿠키
const myCookieConf = {
  // httpOnly: 웹 서버를 통해서만 쿠키 접근 가능하도록 설정(프론트에서 document.cookie로 접근을 차단 )
  // maxAge : 쿠키 수명(단위 ms)
  // expires: 만료 날짜를 GMT시간설정
  // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송
  // 즉, 쿠키가 전송될 url특정 가능(기본값: /)
  // domain: 쿠키가 전송될 도메인을 특정 가능(기본값: 현재도메인)
  // secure: 웹브라우저와 웹서버가 https로 통신하는 경우만 쿠키를 서버에 전송
  // signed: 쿠키의 암호화 결정(req.signedCookies객체에 들어있음)
  httpOnly: true,
  maxAge: 20 * 1000,
  signed: true, //암호화쿠키설정시 쓰는 옵션
};

app.get('/', (req, res) => {
  res.render('cookie');
});

app.get('/setCookie', (req, res) => {
  // res.coookie(쿠키이름, 쿠키 값, 쿠키 옵션)
  //   res.cookie('myCookie', 'myValue', myCookieConf); // 일반 쿠키
  res.send(req.signedCookies); // 암호화 쿠키
});

app.get('/getCookie', (req, res) => {
  res.send(req.cookies);
});

app.get('/clearCookie', (req, res) => {
  res.clearCookie('myCookie', 'myValue', myCookieConf);
  res.send('Cookie 삭제 완룐');
});

app.listen(PORT, () => {
  console.log(`${PORT} 접속완료!`);
});
