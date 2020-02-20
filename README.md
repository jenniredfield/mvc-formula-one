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

You will need to make routes (specified below) and apply controller functions to each of those routes. Your controllers will need to use the provided models. You should also read the models carefully to get familiar with the relationships between data.

The folder structure has been created for you to give you some clues on how to structure your project. 

**NOTE** After you have got all of the controllers working (i.e. getting all the correct data), you will need to start implementing views with EJS. BUT! The key thing is you get all of your controllers done first before you try and implement EJS.

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


### Views

**ONCE YOU HAVE COMPLETED ALL OF THE CONTROLLERS**

We are going to build views to display our Formula one data using [EJS (Embedded JavaScript)](http://www.embeddedjs.com/)
There is more EJS reading and a great tutorial on [scotch.io](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)

EJS has been around for a long time. Its first commit on GitHub was over six years ago. It has almost 1.5 million downloads per month
from [npm](https://www.npmjs.com/package/ejs) and is widely used to create [MVC (Model-View-Controller)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
application with JavaScript and express.

#### Static assets.

The public directory includes picturwes for every driver, team and various circuit images. The public directory also has
Bootstrap CSS, Bootstrap.js, jQuery and Popper.js (both dependencies of Bootstrap.js)

There are many resources for the bootstrap framework so you should easily make a great looking responsive website!

As always the best place to start is the official [Bootstrap Documentation](https://getbootstrap.com/docs/4.0/getting-started/introduction/) (use the latest version, 4)

Using pen and paper, plan with your pair what views you'd like to implement before writing any code. Whenever you're building something visual it's always a good idea to have a clear picture of what you're trying to do.

Tip: you might want to extract the Bootstrap dependencies (CSS and JavaScript) into EJS partials since they need to be present in every view.
