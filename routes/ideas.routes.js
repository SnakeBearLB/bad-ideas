const express = require('express');
const ideasControllers = require('../controllers/ideas.controllers');
const router = express.Router();


// New
router.get('/idea/new/:id', ideasControllers.new_idea);

// Delete
router.delete('/delete_idea/:id', ideasControllers.delete_idea);

// Create
router.post('/create_idea/:id', ideasControllers.create_idea);

// Edit
router.get('/:id/edit_idea', ideasControllers.edit_idea);

// Put
router.put('/ideas_put/:id', ideasControllers.put_idea);




module.exports = router;