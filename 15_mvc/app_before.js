const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.set('view engine', 'ejs');
app.set('/views', path.join(__dirname, 'views'));

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});

app.get('/comment/:id', (req, res) => {
  //req.params : 라우트 매개변수에 대한 정보가 담겨 있다.
  console.log('req.params', req.params);
  const cmtID = Number(req.params.id);

  // 존재하지 않는 id로 접근시 404 페이지 렌더링
  if (cmtID < 1 || cmtID > comments.length) {
    return res.render('404');
  }
  if (isNaN(cmtID)) {
    // typeof cmtID === NaN
    return res.render('404');
  }

  // !comments[cmtID -1] 로 한번에 처리 가능

  res.render('comment', { comment: comments[cmtID - 1] });
});

app.get('/test/:id/:name', (req, res) => {
  console.log(req.params);
  res.send('test res success!');
});

// 404 error 처리
// 반드시 맨 마지막 라우터로 처리해야 한다
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`${PORT} 접속 성공!`);
});

// (임시) DB로부터 받아온 댓글 목록
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
];
