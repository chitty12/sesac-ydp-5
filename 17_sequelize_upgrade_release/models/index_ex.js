const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Customer = require('./Customer')(sequelize, Sequelize);
const Orders = require('./Orders')(sequelize, Sequelize);

// table 간 관계 정의
Customer.hasMany(Orders, {
  foreignKey: 'custid',
  sourceKey: 'custid',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Orders.belongsTo(Customer, { foreignKey: 'custid', targetKey: 'custid' });

db.Customer = Customer;
db.Orders = Orders;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
