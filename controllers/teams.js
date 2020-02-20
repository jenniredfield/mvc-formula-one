const teams = require('../models/teams');

function getTeams(req, res, ) {
  return teams.find()
    .then(team => {
      res.render('../views/teams.ejs', { team });
    }).catch(console.error)
}

function getSpecificTeam(req, res) {
  return teams.find({ _id: req.params.team_id })
    .then(team => {
      res.send(team);
    }).catch(console.error);
}

module.exports = { getTeams, getSpecificTeam };