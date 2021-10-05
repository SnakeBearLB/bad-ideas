const express = require('express');
const Ideas = require('../models/ideas');
const Users = require('../models/user');
const sessionsRouter = express.Router();

const new_idea = (req, res) => {
  res.send('this works');
  // res.render('ideas/new.ejs', (err, {
  //   idea: req.session.currentUser,
  // })
}

// const create_idea = (req, res) => {
//   Ideas.
// }
 
const ideas_show = (req, res) => {
 res.render('/ideas.ejs');
}

module.exports = {
  ideas_show,
  new_idea,
}