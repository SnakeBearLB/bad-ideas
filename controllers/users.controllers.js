const bcrypt = require('bcrypt');
const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.js');
const Ideas = require('../models/ideas');


// New / new login page 
const new_login = (req, res) => {
  res.render('users/new.ejs', {
    currentUser: req.session.currentUser
  });
};

// Create (account route)
// userRouter.post
const create_account = (req, res) => {
  // overwrite the use password with the hashed password, then pass that into our database
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

  User.create(req.body, (error, createdUser) => {
    res.send('users/new.ejs');
  });
};

// Show. route to show user dashboard with their ideas
// router.get('/users/dashboard/:id', 
const show_dashboard = (req, res) => {
  User.findById(req.params.id).populate('ideas').exec((err, user) => {
    Ideas.find({_id: {$nin: user.ideas}}).exec((err, ideas) => {
      console.log(ideas);
      res.render('users/dashboard.ejs', {
        text: 'Idea Detail', user, ideas
      });
    })
  })
}

module.exports = {
  new_login,
  create_account,
  show_dashboard,
}



