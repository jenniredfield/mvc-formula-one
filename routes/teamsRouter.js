const express = require('express');
const router = express.Router();
const {getTeams, getSpecificTeam} = require('../controllers/teams');

router.route('/')
  .get(getTeams);
router.route('/:team_id')
  .get(getSpecificTeam);

module.exports = router;
