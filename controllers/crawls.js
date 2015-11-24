var Crawl = require("../models/crawl");

var index = function(req, res, next) {

  Crawl.find({}, function(error, crawls) {
    res.json(crawls);
  });
}

module.exports = {
  index: index
};
