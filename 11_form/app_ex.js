const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/model/uploads', express.static(__dirname + '/model/uploads'));
app.use('/static', express.static(__dirname + '/static'));

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening~!`);
});
