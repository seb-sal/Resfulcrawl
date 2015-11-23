var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var userSchema = new mongooose.Schema({
  prof_name: String,
  prof_email: String,
  prof_picture: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
