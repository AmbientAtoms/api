var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  multiple: Boolean,
  options: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Option' }],
  valid: { type: mongoose.Schema.Types.ObjectId, ref: 'Option' }
}, {timestamps: true});