// TODO: DB(mysql) 연결
// TODO: 모델 코드

const mysql = require('mysql');
const conn = {
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'sesac',
};

const connection = mysql.createConnection(conn);

exports.register = (data, callback) => {
  connection.query(
    `insert into user values(null, "${data.userid}", "${data.name}", "${data.password}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log('user', rows);
      callback(rows.insertId);
    }
  );
};

exports.login = (data, cb) => {
  connection.query(
    `select userid, name, pw from user where userid = '${data.userid}' and pw = '${data.password}'`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log(rows);
      cb(rows);
    }
  );
};

exports.delete = (data, cb) => {
  connection.query(
    `delete from user where userid ='${data.userid}'`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log('model>>', rows);
      cb(true);
    }
  );
};

exports.profileEdit = (data, cb) => {
  const { userid, password, name } = data;
  const sql = `update user set pw = '${password}', name = '${name}' where userid ='${userid}'`;
  connection.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows);
    cb(true);
  });
};
