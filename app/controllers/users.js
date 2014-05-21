var mongoose = require('mongoose');
var express = require('express');
var bcrypt = require('bcrypt');
var app = express();
User = mongoose.model('User');

exports.index = function(req, res){
  User.find(function(err, users){
    if(err) throw new Error(err);
    res.send(users);
  });
};

exports.create = function(req, res){
  var user;
  console.log("POST: ");
  console.log(req.body);
  function hashedPass(){
    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return err;
     
        // hash the password using our new salt
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            if (err) return err;
     
            // override the cleartext password with the hashed one
            req.body.password = hash;
            return hash;
        });
    });
  }
  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPass()
  });
  user.save(function (err) {
    if (!err) {
      return console.log("created");
      return console.log(hashedPass())
    } else {
      return console.log(err);
    }
  });
  return res.send(user);
};

exports.delete = function (req, res){
  return User.findById(req.params.id, function (err, user) {
    return user.remove(function (err) {
      if (!err) {
        console.log("removed");
        return res.send('');
      } else {
        console.log(err);
      }
    });
  });
};