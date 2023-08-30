const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  // [before]res.render('visitor', { data: Visitor.getVisitors() });

  // [after]
  // console.log(Visitor.getVisitors());
  Visitor.getVisitors((result) => {
    console.log('controller>>', result);
    res.render('visitor', { data: result });
  });
};

exports.postVisitor = (req, res) => {
  console.log(req.body); // {name: , comment: }
  const { name, comment } = req.body;

  Visitor.postVisitor(req.body, (insertId) => {
    console.log('controller>>', insertId);
    res.send({ id: insertId, name: name, comment: comment });
  });
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  const { id } = req.body;

  Visitor.deleteVisitor(id, (result) => {
    console.log('controller>>', result);
    res.send(result);
  });
};

exports.getVisitor = (req, res) => {
  //  console.log(req.query) : 쿼리스트링을 요청했을 때 정보가 담긴다(/visitor?id=5)
  console.log(req.params);
  const { id } = req.params;
  Visitor.getVisitor(id, (result) => {
    // result: 모델의 getVisitor callback 의 인자 (rows)
    console.log(result);
    res.send(result);
  });
};

exports.editDo = (req, res) => {
  console.log(req.body); //id, comment, name

  Visitor.editDo(req.body, () => {
    res.send({ isUpdated: true });
  });
};
