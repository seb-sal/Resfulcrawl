var Crawl = require("../models/crawl");

var index = function(req, res, next) {

  Crawl.find({}, function(error, crawls) {
    res.send(crawls);
  });
}

module.exports = {
  index: index
};
