const express = require('express');
const app = express();
const PORT = 8080;

// express 에 템플릿 엔진 종류 등록
app.set('view engine', 'ejs'); // express 에서 사용할 템플릿 엔진 종류(ejs) 등록
app.set('views', './views'); // 템플릿 엔진 파일을 저장할 위치를 등록

// (가정) 데이터베이스에서 가져온 회원 정보(id, pw)임.
const idFromDB = 'banana';
const pwFromDB = '1234qwer';

// get(경로, 해당 경로로 들어왔을 때 실행할 함수)
// '/'(루트경로) : 서버주소의 포트번호(= localhost:8080/)
app.get('/', function (req, res) {
  // res.send('<h1>Hello! Express!</h1>'); // send(x) x를 클라이언트에게 응답
  res.render('index', {
    userId: idFromDB,
    userPw: pwFromDB,
    btns: ['사과', '오렌지', '키위'],
    me: {
      name: 'chitty',
      msg: '안녕하세요 태영이에요',
    },
    isLogin: true,
    title: ['로그인페이지', '회원가입페이지', '홈'],
  }); // render(ejs_filename) : ejs file 이름을 찾아서 클라이언트에게 응답
});

app.get('/login', function (req, res) {
  res.render('login');
});

// '/sesac' 경로 (http://localhost:8080/sesac)로 들어왔을 때, "새싹 영등포 캠퍼스 5기 수업중" 메세지 보이게하기
app.get('/reg', function (req, res) {
  res.render('reg');
});

// 서버가 실행할 PORT 지정하고, 실행시 콘솔로그로 찍어봄.
app.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});

// 1. /login 경로로 요청이 들어오면 로그인 페이지(ejs)를 응답
// 2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
