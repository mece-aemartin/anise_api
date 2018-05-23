'use strict';

module.exports = function(app) {
	var anise = require('../controllers/anise_controller');

	app.route('/tasks')
		.get(anise.get_tasks)
		.post(anise.create_task);

	app.route('/tasks/:id')
		.get(anise.get_task)
		.put(anise.update_task)
		.delete(anise.delete_task);
};

