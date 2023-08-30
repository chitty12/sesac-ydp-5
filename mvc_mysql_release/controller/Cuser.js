// TODO: 컨트롤러 코드
const userInfo = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.register = (req, res) => {
  console.log(req.body.userid);

  userInfo.register(req.body, () => {});
  res.send({ userid: req.body.userid });
};

exports.sign_in = (req, res) => {
  console.log(req.body);
  res.render('signin');
};

exports.login = (req, res) => {
  const { userid, password } = req.body;

  userInfo.login(req.body, (rows) => {
    if (rows.length !== 0)
      res.send({
        id: rows[0].id,
        userid: rows[0].userid,
        password: rows[0].pw,
        name: rows[0].name,
      });
    else res.send('false');
  });
};

exports.profile = (req, res) => {
  console.log(req.body);
  const { userid, password, name } = req.body;
  res.render('profile', { userid: userid, password: password, name: name });
};

exports.delete = (req, res) => {
  console.log('요청', req.body);
  userInfo.delete(req.body, (result) => {
    res.send(result);
  });
};
