const express = require('express');
const Ideas = require('../models/ideas');
const User = require('../models/user');
const activitiesRouter = express.Router();

// index
const indexActivities = (req, res) => {
  res.render('activities/index.ejs', {
    currentUser: req.session.currentUser
  })
}

// new
const problemRephrase = (req, res) => {
  res.render('activities/newProblem.ejs', {
    currentUser: req.session.currentUser
  });
};

// create
const createProblem = (req, res) => {
  // create new problem field in user object
  res.send(req.body)
  // push new problem to proble field in object
  // save new object
  // render page 
  // send current user id
}

module.exports = {
  indexActivities,
  problemRephrase,
  createProblem,
}