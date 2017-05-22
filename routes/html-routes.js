var path = require('path');

//Routes

var express = require("express");
var mongojs = require("mongojs");

var app = express();

var databaseUrl = "bromancer";
var collections = ["messages", "profiles", "users"];

var db = mongojs(databaseUrl, collections);

module.exports = function(app, passport) {

//Home page
app.get('/', function(req, res) {
res.sendFile(path.join(__dirname, "../public/landing.html"));
	});


//Login
 app.get('/profile', function(req, res) {
 	res.sendFile(path.join(__dirname, "../public/profile.html"));
 	// res.render('profile', { username: req.User.email });
 });

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
};

//Send UserName out for further use
app.get('/api/user_data', function(req, res) {
	if(req.user === undefined) {
		res.json({});
	} 
	else {
		res.json({
			username: req.user
		});
	}
});