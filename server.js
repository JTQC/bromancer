// *** Dependencies
// =============================================================
var express = require("express");
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var dbURI = 'mongodb://localhost/bromancer';
mongoose.connect(dbURI);

require('./config/passport.js')(passport);
var localStrat = require('./config/passport.js')
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('view engine', 'pug');

// // Static directory
app.use(express.static("./public"));

// Routes =============================================================

require("./routes/html-routes.js")(app, passport);
require("./routes/api-routes.js")(app, passport);

mongoose.connection.on('connected', function() {
	console.log('You are now connected on ' + PORT);
});

mongoose.connection.on('error', function (err) {
	console.log('Mongoose default connection error: ' + err); 
});

mongoose.connection.on('disconnected', function () {
	console.log("You are now disconnected");
});

app.listen(3000, function() {
	console.log("App running on port 3000");
});

    