var express = require('express');
var lameFortunes = require('./lib/lame-fortunes/lame-fortunes');
var fakeWeather = require('./lib/fake-weather/fake-weather');

var app = express();

//handlebars
var handlebars = require('express-handlebars')
    .create({
        defaultLayout: 'main',
        helpers:{
            section: function(name, options){
                if(!this._sections) {
                    this._sections = {};
                }

                this._sections[name] = options.fn(this);
                return null;
            }
        }
    });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use(require('body-parser').urlencoded({extended: true}));

app.disable('x-powered-by');

app.use(function(req, res, next){
   res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
   next();
});

app.use(function (req, res, next) {
    if(!res.locals.partials)
        res.locals.partials = {};

    res.locals.partials.weatherContext = fakeWeather.getWeatherData();
    next();
});

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/headers', function (req, res) {
   res.set('Content-Type', 'text/plain');
   var s = '';

   for(var name in req.headers)
       s += name + ': ' + req.headers[name] + '\n';

   res.send(s);
});

app.get('/about', function(req, res) {
    res.render('about', {
        fortune: lameFortunes.getLameFortune(),
        pageTestScript: '/qa/tests-about.js'
    });
});

app.get('/tours/hood', function (req, res) {
   res.render('tours/hood');
});

app.get('/tours/oregon', function (req, res) {
    res.render('tours/oregon');
});

app.get('/tours/request-group-rate', function (req, res) {
    res.render('tours/request-group-rate');
});

app.get('/jquery-test', function(req, res){
    res.render('jquery-test');
});

app.get('/client-side', function(req, res){
    res.render('client-side');
});

app.get('/newsletter', function(req, res){
   //provide a dummy value until using csrf later
   res.render('newsletter', {csrf: 'CSRF token goes here'});
});

app.post('/process', function (req, res) {
   console.log('Form (from querystring): '+ req.query.form);
   console.log('CSRF token (from hidden form field): ' + req.body._csrf);
   console.log('Name (from visible form field): ' + req.body.name);
   console.log('Email (from visible form field): ' + req.body.email);
   res.redirect(303, '/thank-you');
});

app.get('/data/client-side', function(req, res){
   res.json({
       animal: 'Ifrit',
       bodyPart: 'horns',
       adjective: 'sharp',
       noun: 'fire'
   });
});

app.use(function(req, res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});


app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate');
});