var express = require('express');
var app = express();
var data = require('./data.json');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index.ejs', {"data": data});
});

app.get('/menu/entradas', function (req, res) {
    res.render('entradas.ejs', {"data": data});
});

app.get('/menu/sopas-cremas', function (req, res) {
    res.render('sopas-cremas.ejs', {"data": data});
});

app.get('/menu/segundos', function (req, res) {
    res.render('segundos.ejs', {"data": data});
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Example app listening on port 8080!');
});