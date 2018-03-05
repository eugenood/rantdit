const express = require('express');
const bodyParser = require('body-parser');
const RantStore = require('./model/RantStore');

const app = express();
const rantStore = new RantStore();
const port = process.env.API_PORT || 3001;

// add dummy rants into rant store for quick testing
rantStore.addRant('this is great', 'nexolute');
rantStore.addRant('this is not so great', 'jackmoo1');
rantStore.addRant('hello my world', 'worldlover');

// apply middleware to decode json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve the frontend bundle as static files
app.use(express.static('dist'));

// get all rants
app.get('/all', function(req, res) {
  res.json(rantStore.getRants());
});

// get latest rants
app.get('/latest', function(req, res) {
  res.json(rantStore.getLatestRants(3));
})

// compose new rant
app.post('/compose', function(req, res) {
  const { message, user } = req.body;
  const newRant = rantStore.addRant(message, user);
  res.send(newRant);
});

// upvote existing rant identified by its id
app.post('/upvote', function(req, res) {
  const { id } = req.body;
  rantStore.upvoteRant(id);
  res.send('done');
});

// downvote existing rant identified by its id
app.post('/downvote', function(req, res) {
  const { id } = req.body;
  rantStore.downvoteRant(id);
  res.send('done');
});

// start server
app.listen(port, function() {
 console.log(`Server started at port ${port}`);
});