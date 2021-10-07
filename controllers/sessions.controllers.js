// Dependencies
const bcrypt = require('bcrypt');
const User = require('../models/user.js');


// New (login page)
const new_login = (req, res) => {
	res.render('sessions/login.ejs', {
		currentUser: req.session.currentUser
	});
};

// Delete (logout route)
// sessionsRouter.delete('/', 
const logout = (req, res) => {
  req.session.destroy((error) => {
      res.redirect('/');
  });
};

// Create (login route)
// sessionsRouter.post('/', 
const create_login = (req, res) => {
  // Check for an existing user
  User.findOne({
    email: req.body.email
    }, (error, foundUser) => {
      // send error message if no user is found
      if(!foundUser) {
        res.send('Oops! No user with that email address has registered.');
      } else {
        // if a user has been found
        // compare the given password with the hashed password we have stored
        const passwordMatches = bcrypt.compareSync(req.body.password, foundUser.password);

        // if the passwords match
        if (passwordMatches) {
          // add the user to our session
          req.session.currentUser = foundUser;
          // redirect back to our home page
          res.redirect('/user/choice');
        } else {
          // if the passwords don't match
          res.send('Oops! Invalid credentials.');
        }
      }
  });
};

// Export Sessions Router
module.exports = {
  new_login, 
  create_login,
  logout,
};