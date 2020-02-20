const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  event_id: String,
  driver_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'driver'
  },
  team_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'team'
  },
  position: Number,
  points: Number,
  grid: Number,
  laps: Number,
  status: String,
  time: Number
});

module.exports = mongoose.model('result', resultSchema);
