var mongoose = require('mongoose');
//var User = mongoose.model('Option');
Schema = mongoose.Schema

var QuestionSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  options: [
    { 
      id: Schema.Types.ObjectId,
      answer: String, 
      valid: Boolean 
    }
  ]
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);
