# Formula One

## Website serving up 20 years of Formula One data

### Goals

1. Build an end to end application using real data
2. Work with complex mongoDB queries
3. Build a RESTful API
4. Handle different requests appropriately on the server
5. Build a full end to end website with real data
6. Understand MongoDB and mongoose
7. Work with server side HTML templates

### Seeding your database:

Install dependencies
```
$ npm install
```

Make sure a local mongo db instance is running on port 27017
```
$ mongod
```

Run the seed script
```
$ npm run seed-dev
```
Once the process is complete you will see the log line 'db seeded!' and the node process will exit.

### Routes

#### Seasons

**Get all the seasons**
```
/seasons
```

**Get an individual season**
```
/seasons/:season_year
```

**Get events for a season**
```
/seasons/:season_year/events
```

**Get an individual event for a season**
```
/seasons/:season_year/events/:event_number
```

**Get the results for an event**
```
/seasons/:season_year/events/:event_number/results
```
#### Drivers

**Get all the drivers**
```
/drivers
```

**Get an individual driver**
```
/drivers/:driver_id
```

#### Teams

**Get all the teams**
```
/teams
```

**Get an individual teams**
```
/team/:team_id
```

#### Circuits

**Get all the circuits**
```
/circuits
```

**Get an individual circuit**
```
/circuits/:circuit_id
```
