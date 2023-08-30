const express = require('express');
const app = express();
const PORT = 8080;

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

app.listen(PORT, (req, res) => {
  console.log(`${PORT} 연결 성공!`);
});
