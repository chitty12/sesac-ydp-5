// visitor 모델 정의

const userInfo = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    'userInfo',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(20),

        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),

        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: 'user',
      freezeTableName: true,
      timestamps: true,
    }
  );

  return model;
};

module.exports = userInfo;
