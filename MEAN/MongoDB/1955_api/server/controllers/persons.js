var mongoose = require('mongoose');
var Person = mongoose.model('Person');
module.exports = {
  showAll: function(req, res) {
    Person.find({}, function(err, persons) {
      if (err) {
          res.json(err);
      } else {
          res.json(persons);
      }
    })
  },
  create: function(req, res) {
    var person = new Person({name: req.params.name});
    person.save(function(err) {
      if(err){
        res.json(err);
      } else {
        res.redirect('/');
      }
    })
  },
  remove: function(req, res) {
    Person.remove({name: req.params.name}, function(err) {
        if (err) {
            res.json(err);
        } else {
            res.redirect('/');
        }
    })
  },
  showOne: function(req, res) {
    Person.findOne({name: req.params.name}, function(err, person){
        if (err) {
          res.json(err);
        } else {
          res.json(person);
        }
    })
  }
}
