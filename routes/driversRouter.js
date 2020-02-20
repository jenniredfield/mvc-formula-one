const {getDrivers, getSpecificDriver} = require('../controllers/drivers');
const express = require('express');
const router = express.Router();

router.route('/')
  .get(getDrivers);
  
router.route('/:driver_id')
  .get(getSpecificDriver);

module.exports = router;
