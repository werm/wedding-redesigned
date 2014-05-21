var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StorySchema = new Schema({
  title: String,
  time: String,
  icon: String,
  content: String
});

mongoose.model('Story', StorySchema);

