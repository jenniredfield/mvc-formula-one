const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamsSchema = new Schema({
  team: String,
  url: String,
  name: String,
  nationality: String
});

module.exports = mongoose.model('team', teamsSchema);