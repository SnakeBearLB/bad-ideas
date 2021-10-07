// Dependencies
const Ideas = require('../models/ideas');
const User = require('../models/user');


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
    User.findById(req.params.id, (err, user) => {
      user.ideas.push(createdIdea._id);
      user.save((err) => {
        res.redirect(`/users/dashboard/${req.session.currentUser._id}`);
      })
    })
  });
};


// Edit
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