
// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session')
require('dotenv').config();

const usersRouter = require('./models/user');
// ideas router goes here

const app = express();
const PORT = process.env.PORT || 3000

// Mongoose
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL , { useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;

//body parser middleware (gives access to req.body)
app.use(express.urlencoded({ extended: true }));

// middleware for express sessions
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// Test connection with Index route (delete later)
app.get('/', (req, res) => {
  res.send('Hello World!');
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongod connected: ', MONGODB_URL));
db.on('disconnected', () => console.log('mongod disconnected'));

// listener
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));

