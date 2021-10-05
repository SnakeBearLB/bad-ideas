const express = require('express');
const ideasControllers = require('../controllers/ideas.controllers');
const router = express.Router();


// New
router.get('/idea/new/:id', ideasControllers.new_idea);

// router.get('/ideas_show', ideasControllers.ideas_show);


module.exports = router;