module.exports = {};const express = require('express');

const seasonsRouter = require('./seasonsRouter');
const driversRouter = require('./driversRouter');
const teamsRouter = require('./teamsRouter');
const circuitsRouter = require('./circuitsRouter');
const getEvents = require('../controllers/events');
const router = express.Router();

router.use('/seasons', seasonsRouter);
router.use('/drivers', driversRouter);
router.use('/teams', teamsRouter);
router.use('/circuits', circuitsRouter);

router.get('/events', getEvents);


module.exports = router;
