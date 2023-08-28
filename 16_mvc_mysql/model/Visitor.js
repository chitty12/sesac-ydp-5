const mysql = require('mysql');
const conn = {
  host: 'localhost',
  user: 'user1',
  password: '1234',
  database: 'visitor',
};
const connection = mysql.createConnection(conn);

exports.getVisitors = (cb) => {
  // [before]
  //   return [
  //     { id: 1, name: '홍길동', comment: '내가 왔다' },
  //     { id: 2, name: '이찬혁', comment: '으라차차' },
  //   ];

  // [after]
  connection.query('select * from visitor', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows);
    cb(rows);
  });
};
