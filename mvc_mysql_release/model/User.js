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
      console.log(rows);
      //   callback(rows.insertId);
    }
  );
};
