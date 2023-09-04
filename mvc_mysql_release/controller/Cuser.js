// TODO: 컨트롤러 코드
const { userInfo } = require('../models/index');

exports.main = (req, res) => {
  res.render('index');
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
  await userInfo.create({
    // id: autoincrement이므로 따로 지정할 필요가 없다...?
    userid: userid,
    password: password,
    name: name,
  });

  res.send({ userid: req.body.userid });
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

  const result = await userInfo.findOne({
    where: { userid: userid, password: password },
  });

  if (result) {
    req.session.user = userid;
    req.session.pw = password;
    res.render('profile');
  } else {
    res.send('false');
  }
};

exports.profile = (req, res) => {
  console.log(req.body);
  const { userid, password, name } = req.body;
  res.render('profile', { userid: userid, password: password, name: name });
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
  res.send('true');
};

exports.profileEdit = async (req, res) => {
  // [before]
  // console.log(req.body);
  // userInfo.profileEdit(req.body, () => {
  //   res.send('true');
  // });
  const { userid, password, name } = req.body;
  await userInfo.update(
    {
      password: password,
      name: name,
    },
    { where: { userid: userid } }
  );
  res.send('true');
};
