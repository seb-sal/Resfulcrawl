var Crawl = require("../models/crawl");
var User = require("../models/user");

// var index = function(req, res, next) {
//   User.find({}, function(error, users) {
//     console.log(users);
//     res.send(users);
//   });
// }

var show = function(req, res, next) {
  User.findById(req.user.id, function(error, user){
    console.log(user);
    res.json(user);
  });
};

module.exports = {
  show:show,
};
