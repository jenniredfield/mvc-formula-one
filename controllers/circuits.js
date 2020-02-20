const Circuit = require('../models/index').Circuit;

function getCircuits(req, res) {
  return Circuit.find()
    .then(circuits => {
      res.render('../views/circuits.ejs', { circuits });
    }).catch(console.error);
}

function getSpecificCircuit(id) {
  return Circuit.find({
    _id: id
  }).then(circuit => {
    let circuit_location = circuit[0].location.locality + ', ' + circuit[0].location.country;
    return circuit_location;
  }).catch(console.error);
}

module.exports = { getCircuits, getSpecificCircuit };