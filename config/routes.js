module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
  var timeline = require('../app/controllers/timeline');
  var user = require('../app/controllers/users');

	app.get('/', home.index);
  app.get('/timeline', timeline.index);
  app.post('/timeline/create', timeline.create);
  app.delete('/timeline/delete/:id', timeline.delete);
  app.get('/users', user.index);
  app.post('/user/create', user.create);
  app.delete('/user/delete/:id', user.delete);

};
