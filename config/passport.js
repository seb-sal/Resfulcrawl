var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
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
            prof_name: profile.displayName,
            prof_email: profile.emails[0].value,
            prof_picture: profile.photos[0].value,
            googleId: profile.id
          });
          newUser.save(function(err){
            if(err) return done(err);
            console.log(newUser);
            return done(null, newUser);
          });
        }
      });
    }
  ));

  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}
