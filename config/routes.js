var express = require('express'),
    router  = new express.Router();

// Require controllers.
var welcomeController = require('../controllers/welcome');
var crawlsController  = require('../controllers/crawls');
var yelpController    = require('../controllers/yelp');




module.exports = function(app, passport) {

  function isAuthenticated(req, res, next) {

    // do any checks you want to in here

    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
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


  // crawls resources
  router.get('/crawls',     crawlsController.index);
  router.get('/crawls/:id', crawlsController.show);
  router.post('/crawls', crawlsController.create);
  router.get('/crawls/search/:name', crawlsController.search);
  router.delete('/crawls/:id', crawlsController.destroy);
  router.put('/crawls/:id',    crawlsController.update);


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

