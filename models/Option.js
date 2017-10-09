var mongoose = require('mongoose');

var OptionSchema = new mongoose.Schema({
  title: String,
});

mongoose.model('Option', OptionSchema);
