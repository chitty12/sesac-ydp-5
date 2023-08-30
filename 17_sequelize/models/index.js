'use strict';

// module 호출
const Sequelize = require('sequelize');

// config.json 파일을 불러와서 development 환경의 db로 설정함.
// config: db 접근 가능한 설정 값을 저장.
const config = require(__dirname + '/../config/config.json')['development'];

// 빈 db 객체 생성
const db = {};

// Sequelize 객체 생성해서 sequelize 변수에 저장함.
const sequelize = new Sequelize(
  config.database, // visitor
  config.username, // user1
  config.password, // 1234
  config //{}
);

// db = { sequelize: sequelize, Sequelize: Sequelize}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// models폴더에 정의되는 model(테이블)은 db 객체에 저장.
// db = {sequelize, Sequelize, Visitor: 모델(테이블)}
db.Visitor = require('./Visitor')(sequelize, Sequelize);

// db 객체를 모듈화하여 내보냄.
module.exports = db;
