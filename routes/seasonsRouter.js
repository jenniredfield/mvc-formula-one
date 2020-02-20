const {
  getSeasons,
  getSeasonByYear,
  getSeasonEvents,
  getIndividualEvent,
  getEventResults
} = require('../controllers/seasons');


const express = require('express');
const router = express.Router();

router.route('/')
  .get(getSeasons);
router.route('/:season_year')
  .get(getSeasonByYear);
router.route('/:season_year/events')
  .get(getSeasonEvents);  
router.route('/:season_year/events/:event_number')
  .get(getIndividualEvent);  
router.route('/:season_year/events/:event_number/results')
  .get(getEventResults);  



module.exports = router;
