var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});