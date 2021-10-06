const express = require('express');
const Ideas = require('../models/ideas');
const User = require('../models/user');
const sessionsRouter = express.Router();


// new
const new_idea = (req, res) => {
  User.findById(req.params.id)
  res.render('ideas/new.ejs', {
    currentUser: req.session.currentUser
  });
};

// delete
const delete_idea = (req, res) => {
  Ideas.findByIdAndRemove(req.params.id, () => {
    res.redirect(`/users/dashboard/${req.session.currentUser._id}`)
  })
}

// update
const put_idea = (req, res) => {
  Ideas.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect(`/users/dashboard/${req.session.currentUser._id}`)
  });
};

// create
const create_idea = (req, res) => {
  Ideas.create(req.body, (err, createdIdea) => {
    res.redirect(`/users/dashboard/${req.session.currentUser._id}`)
  });
};

// delete
const edit_idea = (req, res) => {
  Ideas.findById(req.params.id, (err, foundIdea) => {
    res.render('ideas/edit.ejs', {
      idea: foundIdea
    });
  });
};
 


module.exports = {
  new_idea,
  create_idea,
  edit_idea,
  put_idea,
  delete_idea,
};