var mongoose = require('mongoose'),
  Story = mongoose.model('Story');

exports.index = function(req, res){
  Story.find(function(err, stories){
    if(err) throw new Error(err);
    res.render('home/index', {
      title: 'Craig & Nicole',
      stories: stories
    });
  });
};