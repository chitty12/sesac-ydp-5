const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitors', controller.getVisitors);

router.post('/visitor', controller.postVisitor);

router.delete('/visitor', controller.deleteVisitor);

router.get('/visitor/:id', controller.getVisitor);
// 쿼리사용시 '/visitor'

router.patch('/visitor', controller.editDo);

module.exports = router;
