const bcrypt = require('bcrypt');
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
  // overwrite the use password with the hashed password 
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  // pass hashed password into database
  User.create(req.body, (error, createdUser) => {
    res.redirect('/login');
  });
};

// Show. route to show user dashboard with their ideas
// router.get('/users/dashboard/:id', 
const show_dashboard = (req, res) => {
  User.findById(req.params.id).populate('ideas').exec((err, user) => {
    Ideas.find({_id: {$nin: user.ideas}}).exec((err, ideas) => {
      res.render('users/dashboard.ejs', {
        text: 'Idea Detail', user, ideas,
        currentUser: req.session.currentUser._id,
        title: 'dashboard',
      });
    })
  })
}

module.exports = {
  new_login,
  create_account,
  show_dashboard,
}



