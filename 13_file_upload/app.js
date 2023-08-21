const express = require('express');
const app = express();
const PORT = 9000;
const multer = require('multer');

const upload = multer({
  dest: 'uploads/',
  //클라이언트가 업로드한 파일을 저장할 서버측의 경로 속성.
});

app.set('view engine', 'ejs');
app.set('/views', 'view');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// 1. single () : 하나의 파일을 업로드할 때 사용하는 메서드
// upload.single('userfile') : 클라이언트의 요청이 들어오면 multer 설정(upload 변수)에 따라 파일을 업로드 한후, req.file 객체 생성
// single() 인자는 input 태그의 name 속성과 일치시켜야 함.
app.post('/upload', upload.single('userfile'), (req, res) => {
  console.log(req.file); // req.file ; 파일 업로드 성공 결과 (파일 정보)
  console.log(req.body); // req.body ; title 데이터 정보 확인 가능
  res.send('파일 업로드 완료!');
});

app.listen(PORT, () => {
  console.log(`${PORT}로 연결되었습니다!`);
});
