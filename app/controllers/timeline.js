var mongoose = require('mongoose');
var express = require('express');
var app = express();
Story = mongoose.model('Story');

exports.index = function(req, res){
  Story.find(function(err, stories){
    if(err) throw new Error(err);
    res.send(stories);
  });
};

exports.create = function(req, res){
  var story;
  console.log("POST: ");
  console.log(req.body);
  story = new Story({
    title: req.body.title,
    time: req.body.time,
    icon: req.body.icon,
    content: req.body.content
  });
  story.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(story);
};

exports.delete = function (req, res){
  return Story.findById(req.params.id, function (err, story) {
    return story.remove(function (err) {
      if (!err) {
        console.log("removed");
        return res.send('');
      } else {
        console.log(err);
      }
    });
  });
};