var express = require('express'),
    router  = new express.Router();

// Require controllers.
var welcomeController = require('../controllers/welcome');
var crawlsController  = require('../controllers/crawls');
var yelpController    = require('../controllers/yelp');

module.exports = function(app, passport) {

  // accept any routes that match the given path
  // in part or in whole, and send them to the
  // express.Router that is the second param
  app.use('/', router);

  // welcome/root path
  router.get('/', welcomeController.index);

  // crawls resources
  router.get('/crawls',     crawlsController.index);
  router.get('/crawls/:id', crawlsController.show);

  // yelp api implmentation
  router.get('/venues',     yelpController.index);

  // login/logout "session" routes
  router.get(
    '/auth/google',
    passport.authenticate('google', {scope: ['profile', 'email'] })
  );

  router.get(
    '/oauth2callback',
    passport.authenticate(
      'google',
      {
        successRedirect : '/',
        failureRedirect : '/'
      }
    )
  );

  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};

