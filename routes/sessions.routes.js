const express = require('express');
const sessionControllers = require('../controllers/sessions.controllers');
const router = express.Router();


//New
router.get('/login', sessionControllers.new_login);

//Create
router.post('/', sessionControllers.create_login);

//Delete
router.delete('/', sessionControllers.logout);

//Show
// router.get('/logged_in', sessionControllers.user_dash);

module.exports = router;