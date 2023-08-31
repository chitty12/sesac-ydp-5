// const Visitor = require('../model/Visitor');

// 구조분해
const { Visitor } = require('../models'); //../models/index.js

function times(date) {
  let yy = date.getFullYear();
  let mon = date.getMonth();
  let day = date.getDay();
  let ti; // AM , PM
  let hh = date.getHours(); // 시간
  let mm = date.getMinutes(); // 분
  let ss = date.getSeconds(); // 초

  ti = hh < 12 ? '오전' : '오후';
  hh = hh > 12 ? hh - 12 : hh;
  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;

  return `${yy}년 ${mon}월 ${day}일 ${ti} ${hh} : ${mm} : ${ss}`;
}

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = async (req, res) => {
  // [before]
  // Visitor.getVisitors((result) => {
  //   console.log('controller>>', result);
  //   res.render('visitor', { data: result });
  // });

  // [after]
  const result = await Visitor.findAll();
  // console.log(result[0].createdAt);

  res.render('visitor', {
    data: result,
    createdAt: await times(result[0].createdAt),
  });
};

exports.postVisitor = async (req, res) => {
  // [before]
  // console.log(req.body); // {name: , comment: }
  // const { name, comment } = req.body;

  // Visitor.postVisitor(req.body, (insertId) => {
  //   console.log('controller>>', insertId);
  //   res.send({ id: insertId, name: name, comment: comment });
  // });

  // [after]
  const { name, comment } = req.body;
  const result = await Visitor.create({
    name: name,
    comment: comment,
  });
  console.log(result.createdAt); // create 메서드가 실행된 결과 (insert한 데이터값)
  res.send({
    result,
    timecreated: await times(result.createdAt),
  });
};

exports.deleteVisitor = async (req, res) => {
  // [before]
  // console.log(req.body);
  // const { id } = req.body;
  // Visitor.deleteVisitor(id, (result) => {
  //   console.log('controller>>', result);
  //   res.send(result);
  // });

  // [after]
  const { id } = req.body;
  const result = await Visitor.destroy({
    where: { id: id },
  });
  console.log(result);
  res.send(true);
};

exports.getVisitor = async (req, res) => {
  // [before]
  //  console.log(req.query) : 쿼리스트링을 요청했을 때 정보가 담긴다(/visitor?id=5)
  // console.log(req.params);
  // const { id } = req.params;
  // Visitor.getVisitor(id, (result) => {
  //   // result: 모델의 getVisitor callback 의 인자 (rows[0])
  //   console.log(result);
  //   res.send(result);
  // });

  // [after]
  const { id } = req.params;
  const result = await Visitor.findOne({
    where: { id: id },
  });
  console.log(result);
  res.send(result);
};

exports.editDo = async (req, res) => {
  // [before]
  // console.log(req.body); //id, comment, name
  // Visitor.editDo(req.body, () => {
  //   res.send({ isUpdated: true });
  // });

  // [after]
  // update(변경될 값, where절)
  await Visitor.update(
    { name: req.body.name, comment: req.body.comment },
    {
      where: { id: req.body.id },
    }
  );

  const result = await Visitor.findOne({
    where: { id: req.body.id },
  });
  res.send({ isUpdated: true, timeupdate: times(result.updatedAt) });
};
