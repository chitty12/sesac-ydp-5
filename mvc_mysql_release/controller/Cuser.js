// TODO: 컨트롤러 코드
const register = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.sign_in = (req, res) => {
  console.log(req.body); // {}
  register.userInfo(req.body, (cb) => {
    console.log(cb);
  });
  res.render('signin');
};

// exports.profile =
