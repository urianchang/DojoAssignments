//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Duck = mongoose.model('Duck');

//: Use native promises
mongoose.Promise = global.Promise;

module.exports = {
    showAll: function(req, res) {
        Duck.find({}, function(err, ducks) {
            if (err) {
                console.log('unable to reach database');
            } else {
                res.render('index', {ducks : ducks});
            }
        })
    },
    showOne: function(req, res) {
        Duck.find({_id: req.params.id}, function(err, ducks) {
            if (err) {
                console.log('unable to reach database');
            } else {
                res.render('showDuck', {duck : ducks[0]});
            }
        })
    },
    create: function(req, res) {
        //: Create a new Duck
        var duck = new Duck({name: req.body.duckname, gender: req.body.gender, age: req.body.age, description: req.body.details });
        //: Try to save new duck to DB
        duck.save(function(err) {
            if(err) {
                res.render('newDuck', {title: 'you have errors!', errors: duck.errors});
            } else {
                res.redirect('/');
            }
        })
    },
    editOne: function(req, res) {
        Duck.find({_id: req.params.id}, function(err, ducks) {
            if (err) {
                console.log('unable to reach database');
            } else {
                // console.log(ducks);
                res.render('editDuck', {duck : ducks[0]});
            }
        })
    },
    updateOne: function(req, res) {
        Duck.update({_id: req.params.id}, {$set: {name: req.body.duckname, gender: req.body.gender, age: req.body.age, description: req.body.details }}, function(err) {
            if (err) {
                console.log('unable to reach database');
            } else {
                res.redirect('/');
            }
        })
    },
    deleteOne: function(req, res) {
        Duck.remove({_id: req.params.id}, function(err) {
            if (err) {
                console.log('unable to reach database');
            } else {
                res.redirect('/');
            }
        })
    }
}
