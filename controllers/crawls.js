var Crawl = require("../models/crawl");

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

//findByName
var search = function(req, res, next) {
  console.log("hi");
  Crawl.findByName(req.params.title, function(error, crawl){
    res.json(crawl);
  });
};


module.exports = {
  index: index,
  show: show,
  search: search
};
