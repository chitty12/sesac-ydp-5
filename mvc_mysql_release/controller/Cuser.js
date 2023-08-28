// TODO: 컨트롤러 코드
const userInfo = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.register = (req, res) => {
  console.log(req.body);

  userInfo.register(req.body, () => {
    res.send({ userid: req.body.userid, pw: req.body.password });
  });
};

exports.sign_in = (req, res) => {
  console.log(req.body);
  res.render('signin');
};

exports.login = (req, res) => {
  const { userid, password } = req.body;

  userInfo.login(req.body, (rows) => {
    res.send({
      id: rows.id,
      userid: rows.userid,
      password: rows.pw,
      name: rows.name,
    });
  });
};

exports.profile = (req, res) => {
  res.render('profile');
};
