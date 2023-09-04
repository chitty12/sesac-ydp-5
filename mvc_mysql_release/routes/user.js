// TODO: 라우트 설정
const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/', controller.main);

router.get('/signup', controller.signup);

router.post('/signup', controller.register);

router.get('/sign_in', controller.sign_in);

router.post('/sign_in', controller.login);

router.post('/profile', controller.profile);

router.delete('/profile/delete', controller.delete);

router.patch('/profile', controller.profileEdit);

router.get('/allmem', controller.allmem);

module.exports = router;
