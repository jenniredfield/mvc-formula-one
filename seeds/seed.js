const mongoose = require('mongoose');
mongoose.Promise = Promise;
const {
  Circuit, Driver, Event,
  Result, Season, Team
} = require('../models');
const {
  circuitsData, driversData, eventsBySeason,
  resultsBySeason, seasonsData, teamsData
} = require('./data');

function seedDB (dbUrl) {
  console.log("TCL: seedDB -> dbUrl", dbUrl)
  const circuitIds = {}, teamIds = {}, 
    driverIds = {}, seasonIds = {}, eventIds = {};
  
  return mongoose.connect(dbUrl, {useMongoClient: true})
    .then(() => {
      mongoose.connection.db.dropDatabase();
    })
    .then(() => {
      const circuitPromises = Object.keys(circuitsData).map(circuit =>
        new Circuit(circuitsData[circuit])
          .save()
          .then((doc) => {
            circuitIds[circuit] = doc.id;
            return doc;
          })
      );
    
      const teamsPromises = Object.keys(teamsData).map(team =>
        new Team(teamsData[team])
          .save()
          .then((doc) => {
            teamIds[team] = doc.id;
            return doc;
          })
      );
    
      const driverPromises = Object.keys(driversData).map(driver =>
        new Driver(driversData[driver])
          .save()
          .then(doc => {
            driverIds[driver] = doc.id;
            return doc;
          })
      );
    
      const seasonPromises = Object.keys(seasonsData).map(season =>
        new Season(seasonsData[season])
          .save()
          .then((doc) => {
            seasonIds[seasonsData[season].season] = doc.id;
            return doc;
          })
      );
    
      return Promise.all([
        Promise.all(circuitPromises),
        Promise.all(teamsPromises),
        Promise.all(driverPromises),
        Promise.all(seasonPromises)
      ]
      )
        .then(data => {
          let eventsPromises = [];
          Object.keys(eventsBySeason).forEach(seasonYear => {
            let year = eventsBySeason[seasonYear].map(event => {
              let date = new Date(`${event.date}T${event.time}`).getTime() || new Date(event.date + 'T12:00').getTime();
              return new Event({
                season_id: seasonIds[seasonYear],
                round: +event.round,
                circuit_id: circuitIds[event.Circuit.circuitId],
                date_time: date
              })
                .save()
                .then(doc => {
                  eventIds[seasonYear] = eventIds[seasonYear] || {};
                  eventIds[seasonYear][event.round] = doc.id;
                  return doc;
                });
            });
            eventsPromises = eventsPromises.concat(year);
          });
          return Promise.all([
            Promise.all(eventsPromises),
            ...data
          ]);
        })
        .then(data => {
          let resultsPromises = [];
          Object.keys(resultsBySeason).forEach((year) => {
            Object.keys(resultsBySeason[year]).forEach(round => {
              let roundResults = Object.keys(resultsBySeason[year][round]).map((position) => {
                const {
                  driver, constructor, points,
                  grid, laps, status, time
                } = resultsBySeason[year][round][position];

                return new Result({
                  event_id: eventIds[year][round],
                  driver_id: driverIds[driver.driverId],
                  team_id: teamIds[constructor],
                  position,
                  points,
                  grid: +grid,
                  laps: +laps,
                  status,
                  time: time === 'N/A' ? 0 : +time
                }).save();
              });
              resultsPromises = resultsPromises.concat(roundResults);
            });
          });
          return Promise.all([
            ...resultsPromises,
            ...data
          ]);
        })
        .then(data => {
          console.log('db seeded!');
          mongoose.disconnect();
          return data;
        });
    });
}
 

module.exports = seedDB;
