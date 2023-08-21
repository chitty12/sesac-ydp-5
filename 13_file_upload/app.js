const express = require('express');
const app = express();
const PORT = 9000;
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장 모듈

const upload = multer({
  dest: 'uploads/',
  //클라이언트가 업로드한 파일을 저장할 서버측의 경로 속성.
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    // storage: 저장할 공간에 대한 정보
    destination(req, file, done) {
      // done: callback 함수.
      done(null, 'uploads/'); // 파일을 업로드할 경로 설정.
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // extname: 파일 "확장자"를 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // basename: 파일 "이름"을 추출
      // date.now()의 필요성 : 1. 중복 방지  2. 파일 이름만 보고 저장 시점 유추 가능
      // null : error 를 의미하는 매개변수. 즉, 에러가 없으므로 'null' 이라고 전달하여 콜백 함수를 호출함.
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 파일 제한 정보 5MB
});

app.set('view engine', 'ejs');
app.set('/views', 'view');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads')); //static 미들웨어 등록

app.get('/', (req, res) => {
  res.render('index');
});

// 1. single () : 하나의 파일을 업로드할 때 사용하는 메서드
// upload.single('userfile') : 클라이언트의 요청이 들어오면 multer 설정(upload 변수)에 따라 파일을 업로드 한후, req.file 객체 생성
// single() 인자는 input 태그의 name 속성과 일치시켜야 함.
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
  console.log(req.file); // req.file ; 파일 업로드 성공 결과 (파일 정보)
  console.log(req.body); // req.body ; 파일 외의 정보들
  res.send('파일 업로드 완료!');
});

// 2. array() : 여러 파일을 한 번에 업로드할 때 사용하는 메서드
// uploadDetail.array('userfiles') : 클라이언트 요청이 들어오면 multer 설정 (uploadDetail 변수)에 따라 파일을 업로드 한후, req.files 객체 생성

app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
  console.log(req.files); // [ {파일1 정보}, {파일2 정보}...] : 배열 형태로 각 파일 정보를 출력
  console.log(req.body);
  res.send('하나의 인풋에 여러 파일 업로드 완료');
});

// 3. fields() : 여러 파일을 각각 인풋에 업로드
// req.files 에서 파일 정보를 확인
// fields() 매개 변수로 input 태그의 name을 각각 넣기
app.post(
  '/upload/array',
  uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]),
  (req, res) => {
    console.log(req.files); // {userfile1 : [{파일 정보}], userfile2 : [{파일 정보}]} : 객체 안에 배열 형태로 각 파일 정보를 출력
    console.log(req.body);
    res.send('하나의 인풋에 여러 파일 업로드 완료');
  }
);

app.post('/dynamicFile', uploadDetail.single('dynamicUserfile'), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

app.listen(PORT, () => {
  console.log(`${PORT}로 연결되었습니다!`);
});
