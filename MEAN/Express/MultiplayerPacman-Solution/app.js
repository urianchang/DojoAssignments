var express = require('express.io');
var app = express().http().io();
var path = require('path');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser());
app.use(express.session({secret: 'monkey'}));
app.set('view engine', 'ejs');

app.listen(3000);

require('./routes/index.js')(app);

console.log("Server running on port 3000");
