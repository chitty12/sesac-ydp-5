const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');
const app = express();
const server = http.createServer(app); // express 앱으로 http 서버를 생성
const io = SocketIO(server); // socket.io를 http 서버에 연결
const PORT = 8080;

// 사용자 닉네임 모음 객체
// 배열이 아닌 객체인 이유
const nickObjs = {}; //{socket.id: nick1, socket.id: nick2 ...}

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('chat');
});

function updateList() {
  io.emit('updateNicks', nickObjs); // 전체 유저 리스트 전송
}

// io.on(): socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
  // connection 이벤트는 클라이언트가 접속했을 때 발생
  // 콜백 함수의 인자로 소켓 객체를 제공

  console.log('서버 연결 완료 :: ', socket.id);

  // [실습3]
  // io.emit('notice', `${socket.id}님이 입장하셨어요`);

  // [실습3-2]
  // emit() from server
  // - socket.emit(event_name, data) : 해당 클라이언트에게만 이벤트, 데이터를 전송
  // - io.emit(event_name, data) : 서버에 접속된 모든 클라이언트에게 전송

  socket.on('setNick', (nick) => {
    // 프론트에서 입력한 nick이 nickObjs 객체에 존재하는지 검사

    // 이미 존재: err + '이미 존재하는 닉네임입니다'
    // 새 닉네임: notice + ${nick} 님이 입장하셨습니다.

    if (Object.values(nickObjs).indexOf(nick) > -1) {
      socket.emit('err', '이미 존재하는 닉네임입니다.');
    } else {
      nickObjs[socket.id] = nick;
      io.emit('notice', `${nick} 님이 입장하셨습니다!`);
      socket.emit('entrySuccess', nick); // 해당 소켓 데이터 전송
      updateList();
    }
  });

  // [실습 3-3] 클라이언트 퇴장시 : "notice" 이벤트로 퇴장 공지
  socket.on('disconnect', () => {
    console.log('접속 끊김', socket.id);

    io.emit('notice', `${nickObjs[socket.id]}님이 퇴장하셨습니다.`);
    delete nickObjs[socket.id];
    updateList();
  });

  // [실습4] 채팅창 메세지 전송 step1
  // send 이벤트 받아서 모두에게 newMessage 이벤트로 {닉네임, 입력창내용} 데이터를 전송
  socket.on('sendMsg', (data) => {
    io.emit('newMessage', { nick: data.nick, msg: data.msg });
  });

  // socket.id: 소켓 고유 아이디 (브라우저 탭 단위)
  // [실습1]
  socket.on('hello', (data) => {
    console.log(`${data.who}: ${data.msg}`);
    socket.emit('helloKr', { who: 'hello', msg: '안녕!!' });
  });

  // [실습2]
  socket.on('study', (data) => {
    socket.emit('studyBye', { who: 'chitty', msg: '빠빠' });
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
