const expect = require('chai').expect;
const seed = require('../seeds/seed');
const mongoose = require('mongoose');

describe('API endpoints', () => {
  let docs, app, request;
  before(function () {
    this.timeout(6000);
    return seed('mongodb://localhost:27017/formula_one_test')
      .then(([results, events, circuits, teams, drivers, seasons]) => {
        docs = {
          results,
          events,
          circuits,
          teams,
          drivers,
          seasons
        };
        app = require('../app');
        request = require('supertest')(app);
      });

  });

 

  describe('/seasons', () => {
    it('GET should return all of the F1 seasons of the past 20 years.', () => {
      return request
        .get('/seasons')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.length).to.equal();
          return;
        });
    });
  });

  describe('/seasons/:season_year', () => {
    it('GET should return a specific season.', () => {
      return request
        .get('/seasons/1999')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('Array');
          expect(res.body.length).to.equal(0);
        });
  
    });
  });

  describe('/seasons/:season_year', () => {
    it('GET should return a specific season.', () => {
      return request
        .get('/seasons/1999')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('Array');
          expect(res.body.length).to.equal(0);
        });
  
    });
  });

});
