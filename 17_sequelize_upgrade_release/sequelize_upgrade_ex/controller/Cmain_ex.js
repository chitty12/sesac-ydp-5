const { sequelize } = require('../models/index_ex');
const { Customer, Orders } = require('../models/index_ex');
const { Op } = require('sequelize');

exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findAll();
    res.send(customer);
  } catch (err) {
    console.log(err);
    res.send('뭔가 에러가 있다');
  }
};

exports.postCustomer = async (req, res) => {
  try {
    const { custid, custname, addr, phone, birth } = req.body;
    const customer = await Customer.create({
      custid: custid,
      custname: custname,
      addr: addr,
      phone: phone,
      birth: birth,
    });

    res.send(customer);
  } catch (err) {
    console.log(err);
    res.send('뭔가 에러가 있다');
  }
};

exports.delCustomer = async (req, res) => {
  try {
    const { custid } = req.params;
    const isDeleted = await Customer.destroy({
      where: { custid: custid },
    });
    console.log(isDeleted);
    if (isDeleted) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  } catch (err) {
    console.log(err);
    res.send('뭔가 에러가 있다');
  }
};

exports.modCustomer = async (req, res) => {
  try {
    const { custid } = req.params;
    const { addr } = req.body;
    const customer = await Customer.update(
      { addr: addr },
      {
        where: { custid: custid },
      }
    );
    res.send('성공');
  } catch (err) {
    console.log(err);
    res.send('뭔가 에러가 있다');
  }
};

exports.idProdPrice = async (req, res) => {
  try {
    const { custid } = req.params;

    const idtable = await Customer.findAll({
      where: { custid: custid },
      include: [{ model: Orders, attributes: ['prodname', 'price'] }],
      attributes: ['custname'],
    });
    res.send(idtable);
  } catch (err) {
    console.log(err);
    res.send('뭔가 에러가 있다');
  }
};

exports.totalP = async (req, res) => {
  try {
    const totalPrice = sequelize.fn('SUM', sequelize.literal('amount*price'));

    const nameTotal = await Customer.findAll({
      attributes: ['custid', [totalPrice, 'total_price']],
      include: [
        {
          model: Orders,
          attributes: [],
          where: { custid: { [Op.ne]: null } },
        },
      ],
      group: ['custid'],
      order: [[sequelize.literal('total_price'), 'desc']],
    });

    res.send(nameTotal);
  } catch (err) {
    console.log(err);
    res.send('뭔가 에러가 있다');
  }
};
