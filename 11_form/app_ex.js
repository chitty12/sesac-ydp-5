const express = require('express');
const app = express();
const PORT = 8080;
const multer = require('multer');
const path = require('path');

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(req.body.name) + ext);
    },
  }),
});

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/', (req, res) => {
  res.render('get_ex');
});

app.post('/postForm', (req, res) => {
  console.log(req.body);
  res.render('getresult_ex', { title: '회원가입 결과', userInfo: req.body });
});

app.post('/upload', upload.single('userfile'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send('upload!!');
});

app.get('/axios', (req, res) => {
  console.log(req.query);
  res.render('get_ex');
});

app.post('/axios', (req, res) => {
  console.log(req.body);
  res.render('get_ex');
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening~!`);
});
