const ws = require('ws'); // ws 모듈 불러오기
const express = require('express');
const app = express();
const PORT = 9000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const wsServer = new ws.Server({ server }); // 웹 소켓 서버 접속

const sockets = []; // 클라이언트들을 저장할 배열

wsServer.on('connection', (socket) => {
  console.log('클라이언트 연결 완료!!');

  // 클라이언트의 메세지 수신
  socket.on('message', (message) => {
    console.log(`클라이언트로부터 받은 메세지 : ${message}`);
    sockets.push(socket);

    // 웹 소켓 서버에 접속한 모든 클라이언트 (브러우저 탭)에게 메세지 전송
    // = 브로드캐스팅(여러 컴퓨터한테 데이터 전송)
    sockets.forEach((socket) => {
      socket.send(`${message}`);
    });
  });

  socket.on('error', (error) => {
    console.log('에러 발생:', error);
  });

  socket.on('close', () => {
    console.log('[클라이언트 연결 종료]');
  });
});
