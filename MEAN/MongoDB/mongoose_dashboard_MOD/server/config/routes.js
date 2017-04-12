var ducks = require('../controllers/ducks.js');

module.exports = function(app) {
        //: Landing page - display all rubber ducks
    app.get('/', function(req, res) {
        ducks.showAll(req, res);
    })
        //: Add Rubber Duck page
    app.get('/rubberducks/new', function(req, res) {
        res.render('newDuck');
    })
        //: Show rubber duck - display information about specific duck
    app.get('/rubberducks/:id', function(req, res) {
        ducks.showOne(req, res);
    })
        //: New Rubber Duck form submission
    app.post('/rubberducks', function(req, res) {
        ducks.create(req, res);
    })
        //: Edit rubber duck
    app.get('/rubberducks/edit/:id', function(req, res) {
        ducks.editOne(req, res);
    })
        //: Submit edited rubber duck information
    app.post('/rubberducks/:id', function(req, res) {
        ducks.updateOne(req, res);
    })
        //: Delete rubber duck
    app.post('/rubberducks/destroy/:id', function(req, res) {
        ducks.deleteOne(req, res);        
    })
}
