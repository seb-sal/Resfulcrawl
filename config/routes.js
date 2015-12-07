var express = require('express'),
    router  = new express.Router();

// Require controllers.
var welcomeController = require('../controllers/welcome');
var crawlsController  = require('../controllers/crawls');
var usersController = require('../controllers/users');
var yelpController    = require('../controllers/yelp');




module.exports = function(app, passport) {

  function isAuthenticated(req, res, next) {
    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    if (req.user)
        return next();

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.redirect('/');
}
  // accept any routes that match the given path
  // in part or in whole, and send them to the
  // express.Router that is the second param
  app.use('/', router);

  // welcome/root path
  router.get('/', welcomeController.index);


  router.get('/users/', usersController.index);
  // crawls resources
  router.get('/crawls',     crawlsController.index);
  router.get('/crawls/:id', crawlsController.show);
  router.put('/crawls/:id', crawlsController.update);
  router.get('/crawls/search/:name', crawlsController.search);
  router.delete('/crawls/:id', crawlsController.destroy);
  router.post('/crawls/:id',    crawlsController.rsvpCrawl);
  router.post('/crawls', crawlsController.create);

  // yelp api implmentation
  router.get('/venues', isAuthenticated, yelpController.index);

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

