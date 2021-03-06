/*jshint es5:true*/

var api = require('./api.js'),
  express = require('express'),
  store = require('./store.js'),
  views = require('./views.js');

var routes = { };

routes.configure = function(app) {
  var root = __dirname + '/../';
  app.set('views', root + 'views');
  app.use(express.static(root + 'static'));
  app.use(express.bodyParser());
  app.set('view engine', 'ejs');

  routes.bindViews(app);
  routes.bindApi(app);
};

routes.bindViews = function(app) {
  app.get('/', views.home);
  app.get('/signup', views.signup);
  app.get('/account', views.account);
};

routes.bindApi = function(app) {
  app.get('/pivotal/projects/:token', api.pivotal.projects);
  app.post('/users/validate/:field', api.users.validate.field);
  app.post('/users/create', api.users.create);
};

module.exports = routes;