// // (임시) DB로부터 받아온 댓글 목록
// const comments = [
//   {
//     id: 1,
//     userid: 'helloworld',
//     date: '2022-10-31',
//     comment: '안녕하세요^~^',
//   },
//   {
//     id: 2,
//     userid: 'happy',
//     date: '2022-11-01',
//     comment: '반가워유',
//   },
//   {
//     id: 3,
//     userid: 'lucky',
//     date: '2022-11-02',
//     comment: '오 신기하군',
//   },
//   {
//     id: 4,
//     userid: 'bestpart',
//     date: '2022-11-02',
//     comment: '첫 댓글입니당ㅎㅎ',
//   },
// ];

const comment = require('../model/comment');

exports.main = (req, res) => {
  res.render('index');
};
exports.comments = (req, res) => {
  res.render('comments', { comments: comment.getCommentAll() });
};
exports.comment = (req, res) => {
  const cmtID = Number(req.params.id);
  const comments = comment.getCommentAll();

  if (cmtID < 1 || cmtID > comments.length) {
    return res.render('404');
  }
  if (isNaN(cmtID)) {
    return res.render('404');
  }
  // !comments[cmtID -1] 로 한번에 처리 가능
  res.render('comment', { comment: comments[cmtID - 1] });
};
