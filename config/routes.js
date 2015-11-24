var express = require('express'),
    router  = new express.Router();

// Require controllers.
var welcomeController = require('../controllers/welcome');
var usersController   = require('../controllers/users');


module.exports = function(app, passport) {
  router.get('/users/:id', usersController.show);
  router.get('/users',     usersController.index);

  app.use('/', router);

  app.get('/', welcomeController.index);


  app.get('/auth/google', passport.authenticate(
    'google',
    {scope: ['profile', 'email'] }
    ));

  app.get('/oauth2callback', passport.authenticate(
    'google',
    {
    successRedirect : '/',
    failureRedirect : '/'
    }
    ));

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

};
