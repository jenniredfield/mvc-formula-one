const season = require('../models/seasons');

function getEvents(req, res) {
  return season.find()
    .then(season => {
      season = season.filter((el) => {
        return el.season !== '1995';
      });
      season = season.filter((el) => {
        return el.season !== '2016';
      });
      res.render('../views/events.ejs', {
        season
      });
    }).catch(console.error);
}

module.exports = getEvents;