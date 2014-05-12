var express = require('express');
var hbs = require('hbs');
var fs = require('fs');

module.exports = function(app, config) {
  app.configure(function () {
    app.use(express.compress());
    app.use(express.static(config.root + '/public'));
    app.set('port', config.port);
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'hbs');
    app.use(express.favicon(config.root + '/public/assets/img/favicon.ico'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(function(req, res) {
      res.status(404).render('404', { title: '404' });
    });
  });

  var blocks = {};

  // hbs.registerPartial('partial', fs.readFileSync('./app/views/partial.hbs', 'utf8'));
  hbs.registerPartials('./app/views/partials');

  hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
      block = blocks[name] = [];
    }
    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
  });

  hbs.registerHelper('block', function(name) {
    var val = (blocks[name] || []).join('\n');

    // clear the block
    blocks[name] = [];
    return val;
  });

};
