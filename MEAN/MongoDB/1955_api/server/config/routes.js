var persons = require('../controllers/persons.js');
module.exports = function(app) {
    //: Show full collection of people born in 1955
  app.get('/', function(req, res) {
    persons.showAll(req, res);
  })
    //: Add name into database
  app.get('/new/:name/', function(req,res){
    persons.create(req, res);
  })
    //: Delete name from database
  app.get('/remove/:name/', function (req, res) {
    persons.remove(req, res);
  })
    //: Show specific infor for person
  app.get('/:name', function(req, res) {
    persons.showOne(req, res);
  })
}
