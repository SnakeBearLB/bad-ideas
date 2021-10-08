const express = require('express');
const activitiesControllers = require('../controllers/activities.controllers')
const router = express.Router();

router.get('/users/activity/:id', activitiesControllers.indexActivities);

router.get('/activities/problemRephrase/:id', activitiesControllers.problemRephrase)

router.post('/activities/processRephrase/', activitiesControllers.createProblem)

module.exports = router;