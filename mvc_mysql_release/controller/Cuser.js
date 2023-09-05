// TODO: 컨트롤러 코드
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { userInfo } = require('../models/index');

exports.main = (req, res) => {
  const userOne = req.session.userid;
  if (userOne) {
    res.render('index', { userOne: true, name: req.session.name });
  } else {
    res.render('index', { userOne: false });
  }
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.register = async (req, res) => {
  // [before]
  // console.log(req.body.userid);
  // userInfo.register(req.body, () => {});
  // res.send({ userid: req.body.userid });
  const { userid, name, password } = req.body;

  const hashedPw = bcrypt.hashSync(password, saltRounds);
  await userInfo.create({
    // id: autoincrement이므로 따로 지정할 필요가 없다...?
    userid: userid,
    password: hashedPw,
    name: name,
  });

  res.send({ name: req.body.name, userid: req.body.userid });
};

exports.sign_in = (req, res) => {
  console.log(req.body);
  res.render('signin');
};

exports.login = async (req, res) => {
  const { userid, password } = req.body;
  // [before]
  // userInfo.login(req.body, (rows) => {
  //   if (rows.length !== 0)
  //     res.send({
  //       id: rows[0].id,
  //       userid: rows[0].userid,
  //       password: rows[0].pw,
  //       name: rows[0].name,
  //     });
  //   else res.send('false');
  // });

  //  [sequelize not session]
  //   const result = await userInfo.findOne({
  //     where: { userid: userid, password: password },
  //   });
  //   console.log(result);
  //   if (result) {
  //     res.send(result);
  //   } else {
  //     res.send('false');
  //   }

  const userCol = await userInfo.findOne({
    where: { userid: userid },
  });

  function comparePw(pw, hPw) {
    return bcrypt.compareSync(pw, hPw);
  }

  const isMatch = comparePw(password, userCol.password);

  if (isMatch) {
    req.session.userid = userid;
    req.session.name = userCol.name;
    req.session.pw = userCol.password;
    res.send({ userid: req.session.userid, name: req.session.name });
  } else {
    res.send('false');
  }
};

exports.profile = (req, res) => {
  res.render('profile', {
    userid: req.session.userid,
    password: req.session.pw,
    name: req.session.name,
  });
};

exports.delete = async (req, res) => {
  // [before]
  // console.log('요청', req.body);
  // userInfo.delete(req.body, (result) => {
  //   res.send(result);
  // });

  const { userid } = req.body;
  await userInfo.destroy({
    where: { userid: userid },
  });

  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send('true');
  });
};

exports.profileEdit = async (req, res) => {
  // [before]
  // console.log(req.body);
  // userInfo.profileEdit(req.body, () => {
  //   res.send('true');
  // });
  const { userid, password, name } = req.body;

  const hashedPw = bcrypt.hashSync(password, saltRounds);
  await userInfo.update(
    {
      password: hashedPw,
      name: name,
    },
    { where: { userid: userid } }
  );
  res.send('true');
};

exports.allmem = async (req, res) => {
  const allmem = await userInfo.findAll({ attributes: ['userid'] });
  console.log(allmem.userid);
  res.render('allmem', { userIDs: allmem });
};
