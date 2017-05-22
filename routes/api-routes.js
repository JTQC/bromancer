var express = require("express");
var mongojs = require("mongojs");
var User = require('../models/user.js');

var mongoose = require('mongoose');
var passport = require('passport');
var localStrat = require('../config/passport.js')

var app = express();

var databaseUrl = "bromancer";
var collections = ["messages", "profiles", "users"];

var db = mongojs(databaseUrl, collections);


module.exports = function(app) {
    
    app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/testing',
    failureRedirect : '/signup',
    }));

    // app.post("/testing", function(req, res) {
    //   console.log("testing");
    //   console.log(req.email);
    // })


    app.post("/user/profile/", function(req, res) {
      console.log(req.body);
      db.profiles.insert(req.body, function(error, saved) {
        if(error) {
          console.log(error);
        }
        else {
          res.send(saved);
        } 
      })
    })

    app.post("/view/profile/", function(req, res) {
      db.profiles.find
    });

        app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/didntwork', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

   localUser = function(req, res, next) {
    res.locals.user = req.user;
    next();
   };

   newUser = function(req, res) {
    res.render('testing');
   };

   app.get('/testing', localUser, newUser);

   app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
   });
  };



  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated())
      return next();

    else {
      res.redirect('/');
    }
  }

