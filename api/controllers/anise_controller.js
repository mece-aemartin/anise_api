'use strict';

var mongoose = require('mongoose'),
	Task = mongoose.model('Tasks');

exports.get_tasks = function(req, res) {
	Task.find({}, function(err, task) {
		if(err) res.send(err);

		res.json(task);
	})
};

exports.create_task = function(req, res) {
	var new_task = new Task(req.body);

	new_task.save(function(err, task)) {
		if(err) res.send(err);

		res.json(task);
	}
};

exports.get_task = function(req, res) {
	Task.findById(req.params.id, function(err, task)) {
		if(err) res.send(err);

		res.json(task);
	}
};

exports.update_task = function(req, res) {
	Task.findOneAndUpdate(
		{ id: req.params.id, },
		req.body,
		{ new: true },
		function(err, task) {
			if(err) res.send(err);

			res.json(task);
		}
	)
};

exports.delete_task = function(req, res) {
	Task.remove(
		{ _id: req.params.id },
		function(err, task) {
			if(err) res.send(err);

			res.json(task);
		}
	)
}