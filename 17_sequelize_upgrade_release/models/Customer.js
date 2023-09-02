const customerModel = (sequelize, DataTypes) => {
  const customer = sequelize.define(
    'Customer',
    {
      custid: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      custname: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      addr: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(11),
      },
      birth: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return customer;
};

module.exports = customerModel;
