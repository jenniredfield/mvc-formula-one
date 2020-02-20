const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seasonsSchema = new Schema({
  season: String,
  url: String
});

module.exports = mongoose.model('season', seasonsSchema);