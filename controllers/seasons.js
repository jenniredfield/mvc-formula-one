const season = require('../models/seasons');
const event = require('../models/events');
const results = require('../models/results');
const circuits = require('../models/circuits');

function getSeasons(req, res) {
  return season.find().then(season => {
    res.render('../views/seasons.ejs', { season });
  }).catch(console.error);
}

function getSeasonByYear(req, res) {
  return season.find({ season: req.params.season_yea }).then(season => {
    res.send(season);
  }).catch(console.error);

}

function getSeasonEvents(req, res) {
  return season.find({ season: req.params.season_year }).then(season => {
    let id = season[0].id;
    return event.find({ season_id: id }).populate('circuit_id');
  }).then((events) => {
    events.event_year = req.params.season_year;
    // events.forEach(function (event) {
    //   let circuit_Id = event.circuit_id;
    // });
    res.render('../views/eventByYear', {
      events
    });
  }).catch(console.error);
}


function getIndividualEvent(req, res, next) {
  return season.find({ season: req.params.season_year }).then(season => {
    let id = season[0].id;
    return event.find({
      season_id: id
    });
  }).then(() => {
    return event.find({ _id: req.params.event_number });
  }).then((event) => {
    res.send(event);
  }).catch(console.error);
}

function getEventResults(req, res) {
  let eventId = req.params.event_number;
  return results.find({
    event_id: eventId
  })
    .populate('driver_id')
    .populate('team_id')
    .then(result => {
      return Promise.all([result, event.findById(eventId)]);
    })
    .then(([result, event]) => {
      return Promise.all([result, event, circuits.findById(event.circuit_id)])
        .then(([result, event, circuit]) => {
          return Promise.all([result, event, circuit]);
        })
        .then(([result, event, circuit]) => {
          res.render('../views/results', { result, event, circuit });
        })
        .then(([result, event, circuit]) => {
          res.render('../views/results', { result, event, circuit });
        })
        .catch(console.error);
    });
}

module.exports = { getSeasons, getSeasonByYear, getSeasonEvents, getIndividualEvent, getEventResults };