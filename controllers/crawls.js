var Crawl = require("../models/crawl");

var index = function(req, res, next) {
  Crawl.find({}, function(error, crawls) {
    res.send(crawls);
  });
}

var show = function(req, res, next) {
  Crawl.find(req.params.id, function(error, crawl){
    res.json(crawl);
  });
};

module.exports = {
  index: index,
  show: show
};
