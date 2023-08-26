const express = require('express');
const router = express.Router();

const controller = require('../controller/Cmain');

router.get('/', controller.main);

router.post(
  '/upload',
  controller.upload.single('userfile'),
  controller.getresult
);

router.get('/axios', controller.axi);

router.post('/axios', controller.axi);

module.exports = router;
