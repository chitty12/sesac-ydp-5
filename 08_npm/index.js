// http 모듈로 웹 서버 생성하기

const http = require('http');

const fs = require('fs'); // 파일 관련 내장 모듈

const server = http.createServer(function (request, response) {
  // 응답 헤더
  //   response.write('<h1>Hello, Node.js!</h1>'); // 응답 본문
  //   response.end('<p>My first node server! 안녕하세용</p>'); // 응답 본문 작성 후에 응답 종료

  try {
    //   html 파일을 불러와보기

    const data = fs.readFileSync('./index2.html');
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(data);
    response.end();
  } catch (err) {
    const errs = fs.readFileSync('./server_ex.html');
    console.error(err);
    response.writeHead(404, { 'content-type': 'text/html; charset=utf8' });
    response.write(errs);
    response.end();
  }
});
const PORT = 8000;

// request 이벤트 = 클라이언트의 요청
// connection 이벤트 = 클라이언트가 접속 (클라이언트와 서버가 연결되었을 때) 발생
server.on('connection', function (request, response) {
  console.log('connection 이벤트 발생!');
});

// 서버를 실행 -> 클라이언트가 localhost: PORT 요청을 날렸으나, 서버가 응답하고 있는 내용이 없음(무한 로딩)
server.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});

// 10초 후 서버 종료
// setTimeout(function () {
//   console.log('10초가 지나서 서버가 종료됩니다');
//   server.close(); // 서버 종료 메서드
// }, 10000);

// 404.html 만들어서 해당 html을 응답으로 보내보기
