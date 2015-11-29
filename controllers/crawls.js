var Crawl = require("../models/crawl");
var User = require("../models/user");

var index = function(req, res, next) {
  Crawl.find({}, function(error, crawls) {
    res.send(crawls);
  });
}

var show = function(req, res, next) {
  Crawl.findById(req.params.id, function(error, crawl){

    res.json(crawl);
  });
};

var create = function(req, res) {
  var newCrawl = req.body;
  newCrawl.creator = req.user._id;

  Crawl.create(newCrawl, function(err, crawl) {
    if(err) {
      res.send(err);
    }
    res.json(crawl);
  });
}

// findByName
var search = function(req, res, next) {
  console.log(req.params.name);
  Crawl.findOne({ "crawls.title": req.params.name}),function(error, crawl){
    if (error) { console.log(error); }
    res.json(crawl);
  };
};
// //Show one spot
// var show = function(req, res, next) {
//   User.findOne({"spots._id":req.params.id}).select('spots').exec(function(err, user){
//     var spots = user.spots.filter(function(s){
//       return s._id == req.params.id;
//     });
//     res.render('spots/show', {spot: spots[0]});
//   });
// };

var destroy = function(req, res) {
  Crawl.findByIdAndRemove(req.params.id, function(err, record){
    if(err){
      res.send(err);
    };
    res.send(record.title + " has been deleted!");
  });
};


module.exports = {
  index: index,
  show: show,
  search: search,
  create: create,
  destroy: destroy
};
