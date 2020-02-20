const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  season_id: String,
  round: Number,
  circuit_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'circuit'
  },
  date_time: Number
});

module.exports = mongoose.model('event', eventSchema);