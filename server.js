
// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session')
require('dotenv').config();
const methodOverride = require('method-override');

var usersRouter = require('./routes/users.routes');
var sessionsRouter = require('./routes/sessions.routes');
var indexRouter = require('./routes/index');
var ideasRouter = require('./routes/ideas.routes');

const app = express();
const PORT = process.env.PORT || 3000

// Mongoose
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL , { useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;

//body parser middleware (gives access to req.body)
app.use(express.urlencoded({ extended: true }));

// method override
app.use(methodOverride('_method'));

// middleware for express sessions
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// middleware to connect routes
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', sessionsRouter);
app.use('/', ideasRouter);


// Error / success
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongod connected: ', MONGODB_URL));
db.on('disconnected', () => console.log('mongod disconnected'));

// listener
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));

module.exports = app;