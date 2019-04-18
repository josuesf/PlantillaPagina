var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('indexparalax.ejs');
});

app.get('/menu', function (req, res) {
    res.render('menu.ejs');
});


var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Example app listening on port 8080!');
});