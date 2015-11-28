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
    console.log(crawl);
    if(err) {
      res.send(err);
    }
    res.json(crawl);
  });
}

//findByName
// var search = function(req, res, next) {
//   console.log("hi");
//   Crawl.findByName(req.params.title, function(error, crawl){
//     res.json(crawl);
//   });
// };


module.exports = {
  index: index,
  show: show,
  // search: search,
  create: create
};
