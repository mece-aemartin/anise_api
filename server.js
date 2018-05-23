var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,

	mongoose = require('mongoose'),
	Task = require('./api/models/anise_model'),
	bodyParser = requrie('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/anisedb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Anise RESTful API server started on: ' + port);