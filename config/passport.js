var GoogleStrategy = require('passport-google-oauth').Oauth2Strategy;
var User = require('../models/user')

module.exports = function(passport) {

  passport.use(new GoogleStrategy)

}
