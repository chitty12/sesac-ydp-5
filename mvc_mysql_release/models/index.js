'use strict';

// module 호출
const Sequelize = require('sequelize');

// config.json 파일을 불러와서 development 환경의 db로 설정함.
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// db {sequelize: sequelize, Sequelize: Sequelize}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// models 폴더에 정의되는 model(테이블)은 db 객체에 저장.
// db = {sequelize, Sequelize, userInfo: 모델(테이블)}
db.userInfo = require('./User')(sequelize, Sequelize);

// db 객체를 모듈화하여 내보냄.
module.exports = db;
