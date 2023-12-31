const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;
const db = require('./models');

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session 미들웨어/ 옵션 객체 추가
app.use(
  session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 600 * 1000,
    },
  })
);

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!

const indexRouter = require('./routes/user');
app.use('/', indexRouter);

// TODO: 404 에러 처리
app.get('*', (req, res) => {
  res.render('404');
});

// force: false ; '실제 데이터베이스에 테이블이 존재하지 않으면' 모델에 정의한대로 생성한다
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/user`);
  });
});
