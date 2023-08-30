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

  connection.query('select * from visitor order by id desc', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows);
    cb(rows);
  });
};

exports.postVisitor = (data, callback) => {
  // 매개변수
  // data: 프론트엔드에서 유저가 입력한 값(req.body)
  // callback : query 실행 후 호출할 함수
  connection.query(
    `insert into visitor values (null, "${data.name}", "${data.comment}")`,

    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log('model>>', rows);
      callback(rows.insertId);
    }
  );
};

exports.deleteVisitor = (id, callback) => {
  console.log('model >>', id);
  connection.query(`delete from visitor where id =${id}`, (err, rows) => {
    if (err) {
      throw err;
    }
    // console.log('model>>', rows);
    callback(true); // {id : id } 로 쓸 수도 있음.
  });
};

exports.getVisitor = (id, callback) => {
  connection.query(`select *from visitor where id = ${id}`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows);
    callback(rows[0]);
  });
};

exports.editDo = (updateData, callback) => {
  const { id, name, comment } = updateData;
  const sql = `update visitor set name = '${name}', comment = '${comment}' where id = '${id}'`;
  connection.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows);
    callback();
  });
};
