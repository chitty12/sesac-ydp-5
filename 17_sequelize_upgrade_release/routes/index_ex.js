const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain_ex');

// customer 조회
router.get('/customer', controller.getCustomer);

// customer 추가
router.post('/customer', controller.postCustomer);

// customer 정보 변경
router.patch('/customer/:custid/addr', controller.modCustomer);

// customer 삭제
router.delete('/customer/:custid', controller.delCustomer);

// JOIN
router.post('/customer/:custid', controller.idProdPrice);

router.post('/Price', controller.totalP);

module.exports = router;
