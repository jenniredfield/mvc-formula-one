const express = require('express');
const router = express.Router();
const {getCircuits, getSpecificCircuit} = require('../controllers/circuits');

router.route('/')
  .get(getCircuits);
router.route('/:circuit_id')
  .get(getSpecificCircuit);


module.exports = router;