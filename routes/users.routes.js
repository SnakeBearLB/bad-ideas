const express = require('express');
const userControllers = require('../controllers/users.controllers');
const router = express.Router();

router.get('/new_login', userControllers.new_login);

router.post('/create_account', userControllers.create_account);

router.get('/users/dashboard/:id', userControllers.show_dashboard);

module.exports = router;