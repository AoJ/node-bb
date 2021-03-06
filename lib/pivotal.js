var pt = require('pivotal');

var pivotal = { };

pivotal.getProjects = function(token, done) {
	pt.useToken(token);
	pt.getProjects(function(e, d) {
		if(e) {
			return done(e);
		}
		var projects = [];

		d.project.forEach(function(p) {
			projects.push({ id: p.id, name: p.name });
		});

		done(null, projects);
	});
};

module.exports = pivotal;