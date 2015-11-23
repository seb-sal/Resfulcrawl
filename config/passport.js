var GoogleStrategy = require('passport-google-oauth').Oauth2Strategy;
var User = require('../models/user');

module.exports = function(passport) {

  passport.use(new GoogleStrategy({
      clientID: process.env.API_GOOGLE_PLUS,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({'googleId': profile.id}, function(err, user) {
        if(err) return done(err);
        if(user) {
          return done(null, user);
        } else {
          var newUser = new User({

          });
        }
      });
    }
  ));

}
