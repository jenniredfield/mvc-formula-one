const drivers = require('../models/drivers');

function getDrivers(req, res) {
  return drivers.find()
    .then(driver => {
      res.render('../views/driver.ejs', {
        driver
      });
    }).catch(console.error);
}

function getSpecificDriver(req, res) {
  return drivers.find({ _id: req.params.driver_id })
    .then(driver => {
      res.send(driver);
    }).catch(console.error);
}


module.exports = { getDrivers, getSpecificDriver };