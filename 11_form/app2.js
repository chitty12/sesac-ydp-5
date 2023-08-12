const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('get_ex');
});

app.get('/getForm', (req, res) => {
  console.log(req.query);
  res.render('getresult_ex', { title: '회원가입 결과', userInfo: req.query });
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening~!`);
});
