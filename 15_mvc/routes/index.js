// 모듈!!!
// 이 모듈의 역할 : 경로 선언과 관련된 내용 기술

const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// 이 파일의 기본 경로는 localhost:PORT/index가 된다.

// router.get('/', (req, res) => {
//   res.render('index');
// });

// // localhost:PORT/index/comments
// router.get('/comments', (req, res) => {
//   res.render('comments', { comments: comments });
// });

// // localhost:PORT/index/comment/:id
// router.get('/comment/:id', (req, res) => {
//   console.log('req.params', req.params);
//   const cmtID = Number(req.params.id);
//   // 존재하지 않는 id로 접근시 404 페이지 렌더링
//   if (cmtID < 1 || cmtID > comments.length) {
//     return res.render('404');
//   }
//   if (isNaN(cmtID)) {
//     return res.render('404');
//   }
//   // !comments[cmtID -1] 로 한번에 처리 가능
//   res.render('comment', { comment: comments[cmtID - 1] });
// });

router.get('/', controller.main);

router.get('/comments', controller.comments);

router.get('/comment/:id', controller.comment);

// module.exports 구문을 통해 router를 내보내야 다른 모듈(파일)에서 router객체를 사용 가능!!
module.exports = router;
