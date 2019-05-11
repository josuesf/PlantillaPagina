var express = require('express');
var app = express();
var data = require('./data.json');
var nodemailer = require('nodemailer');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index.ejs', {"data": data});
});

app.get('/us', function (req, res) {
    res.render('nosotros.ejs');
});


app.get('/food-entries-machupicchu-cusco', function (req, res) {
    res.render('entradas.ejs', {"data": data});
});

app.get('/food-soups-creams-machupicchu-cusco', function (req, res) {
    res.render('sopas-cremas.ejs', {"data": data});
});

app.get('/food-main-courses-machipicchu-cusco', function (req, res) {
    res.render('segundos.ejs', {"data": data});
});

app.post('/contactus', function (req, res) {
    var mailOpts, smtpTrans;

    smtpTrans = nodemailer.createTransport('SMTP', {
        service: 'Gmail',
        auth: {
            user: 'cftigre3@gmail.com',
            pass: 'brigadier'
        }
    });

    mailOpts = {
        from: req.body.name + req.body.email,
        to: 'francisco.farfan.lazo@gmail.com',
        subject: req.body.email + '   ---Msg  from contactus- form',
        text:   'Name: ' + req.body.name + 'Email: ' + req.body.email + 
                'QUERY: ' + req.body.message
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {

        if (error) {
            res.render('index.ejs', {msg: 'Error occured message not sent.', err: true});
        }else {
            res.render('index.ejs', {msg: 'Message sent! Thank you.', err: false});
        }
        smtpTrans.close();
    })
})

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Example app listening on port 8080!');
});