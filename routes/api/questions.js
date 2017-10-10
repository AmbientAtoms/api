var router = require('express').Router();
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

router.post('/api/questions', function(req, res, next) {
  Question.create(req.body, function(err, question) {
    res.json(question);
  })
});

router.get('/api/questions', function(req, res, next) {
  Question.find(function (err, questions) {
    if (err) return next(err);
    res.json(questions);
  });
});

router.post('/api/questions/:id/validation', function(req, res, next) {
  Question.findById(req.params.id, function (err, question) {
    if (err) return next(err);

    var valid_ids = []
    question.options.filter(x => x.valid).forEach(x => valid_ids.push(x._id.toString()))

    valid_ids.sort()
    req.body.options.sort()
    
    function matchAnswers(el, index) {
      return el == req.body.options[index]
    }

    return valid_ids.every(matchAnswers) ? res.json(true) : res.json(false)

  });
});

router.delete('/api/questions/:id', function(req, res, next) {
  Question.findByIdAndRemove(req.params.id, req.body, function (err, question) {
    if (err) return next(err);
    res.json(question);
  });
});


module.exports = router;