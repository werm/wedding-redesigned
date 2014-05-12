module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
  var timeline = require('../app/controllers/timeline');

	app.get('/', home.index);
  app.get('/timeline', timeline.index);
  app.post('/timeline/create', timeline.create);
  app.delete('/timeline/delete/:id', timeline.delete);

};
