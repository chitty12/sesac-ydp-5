const express = require('express');
const app = express();
const PORT = 8080;
const db = require('./models');

app.set('view engine', 'ejs');
app.set('/views', 'view');

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.render('404');
});

db.sequelize.sync({ force: false }).then(() => {
  // force: false; "실제 데이터베이스에 테이블이 존재하지 않으면" 모델에 정의한대로 생성한다는 의미
  // force: true; 테이블이 있던 말던 무조건 생성.
  app.listen(PORT, (req, res) => {
    console.log(`${PORT} 연결 성공!`);
  });
});
