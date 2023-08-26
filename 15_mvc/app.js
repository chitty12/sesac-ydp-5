const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('/views', path.join(__dirname, 'views'));

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// indexRouter에서는 localhost:PORT/ 가 기본경로이다.

app.use('/', indexRouter);

// 404 error 처리
// 반드시 맨 마지막 라우터로 처리해야 한다
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`${PORT} 접속 성공!`);
});
