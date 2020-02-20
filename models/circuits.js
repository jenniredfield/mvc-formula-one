const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const circuitSchema = new Schema({
  wiki: String,
  name: String,
  location: {
    lat: String,
    long: String,
    locality: String,
    country: String
  },
  circuit_id: String
});

module.exports = mongoose.model('circuit', circuitSchema);