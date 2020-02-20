const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
  driverId: String,
  url: String,
  givenName: String,
  familyName: String,
  dateOfBirth: String,
  nationality: String
});

module.exports = mongoose.model('driver', driverSchema);
