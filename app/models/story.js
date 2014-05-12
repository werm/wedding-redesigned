var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StorySchema = new Schema({
  title: String,
  time: String,
  icon: String,
  content: String
});

mongoose.model('Story', StorySchema);

// StorySchema.virtual('date')
//   .get(function(){
//     return this._id.getTimestamp();
//   });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) // ...
//   console.log('meow');
// });

