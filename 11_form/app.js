const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');

// 미들웨어 : 요청(req), 응답(res)의 중간에서 작업하는 코드
// app.use()
// req.body 객체를 해석할 수 있도록  body-parser 미들웨어 등록.
app.use(express.urlencoded({ extended: true })); //post 요청으로 들어오는 모든 형식의 데이터를 파싱(분해)
app.use(express.json()); // json 형식으로 데이터를 주고 받을것이라는 선언.

// 라우팅(routing) - 주소설정
// get '/' => index.ejs 를 보여줌.
app.get('/', (req, res) => {
  console.log(req.query); // { }
  res.render('index', { title: '폼 전송을 연습해보자!' });
});

// Get '/getForm' => 지정된 메세지 전송
// 클라이언트에서 보낸 데이터가  req.query에 저장됨.
app.get('/getForm', (req, res) => {
  console.log(req.query); // { id: 'zcxv', pw: 'ewartwae' }
  res.render('result', { title: 'Get 요청', userInfo: req.query });
});

// Post '/postForm' => 지정 메세지 전송
// 클라이언트에서 보낸 데이터가 req.body에 저장됨.
app.post('/postForm', (req, res) => {
  console.log(req.body); // { id: 'zxcve', pw: 'wsadfad' }
  res.render('result', { title: 'Post 요청', userInfo: req.body });
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening~!`);
});
