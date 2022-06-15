const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

router.post('/login', usersCtrl.login)
// signup
router.post('/signup', usersCtrl.signup)
// login

module.exports = router;