const app = require('./app');

const {PORT=3000} = process.env;

app.set('view engine', 'ejs');

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${PORT}! *Random car noises*`);
});
