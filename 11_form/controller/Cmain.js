const path = require('path');
const multer = require('multer');
const tempUser = require('../model/join');

exports.upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'model/uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.name + Date.now() + ext);
    },
  }),
});

exports.main = (req, res) => {
  res.render('get_ex');
};

exports.getresult = (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.render('getresult_ex', {
    title: '회원가입 결과',
    userInfo: req.body,
    src: req.file.path,
  });
};

exports.axi = (req, res) => {
  console.log(tempUser.users);

  const users = tempUser.users.split('\n');

  for (i = 0; i < users.length; i++) {
    const ids = [];
    push.users[i].split('//')[0];
    const pws = [];
    push.users[i].split('//')[1];
    const names = [];
    push.users[i].split('//')[2];
  }

  res.send({ tempUser: tempUser.tempUser() });
};
