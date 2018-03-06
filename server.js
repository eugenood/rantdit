const express = require('express');
const bodyParser = require('body-parser');
const RantManager = require('./model/RantManager');

const app = express();
const rantManager = new RantManager();
const port = process.env.API_PORT || 3001;

// add dummy rants into rant store for quick testing
rantManager.addRant('this is great', 'nexolute');
rantManager.addRant('this is not so great', 'jackmoo1');
rantManager.addRant('hello my world', 'worldlover');

// apply middleware to decode json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve the frontend bundle as static files
app.use(express.static('dist'));

// get latest rants
app.get('/top/:numResults', function(req, res) {
  res.json(rantManager.getTopRants(req.params.numResults));
})

// compose new rant
app.post('/compose', function(req, res) {
  const { message, user } = req.body;
  const newRant = rantManager.addRant(message, user);
  res.send(newRant);
});

// upvote existing rant identified by its id
app.post('/upvote', function(req, res) {
  const { id } = req.body;
  rantManager.upvoteRant(id);
  res.send('done');
});

// downvote existing rant identified by its id
app.post('/downvote', function(req, res) {
  const { id } = req.body;
  rantManager.downvoteRant(id);
  res.send('done');
});

// start server
app.listen(port, function() {
 console.log(`Server started at port ${port}`);
});