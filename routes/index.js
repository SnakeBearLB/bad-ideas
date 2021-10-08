const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Ideas = require('../models/ideas')


router.get('/', (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser,
  });
});

router.get('/user/choice', (req, res) => {
  res.render('activityOrDash.ejs', {
    currentUser: req.session.currentUser,
    title: 'dashboard',
  });
});


module.exports = router;