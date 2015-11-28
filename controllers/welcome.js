var Crawl = require('../models/crawl');

var index = function(req, res, next) {
  Crawl.find({}, function(error, crawls) {
    console.log(crawls);
    res.render('welcome/index', { user: req.user, crawls: crawls});
  });
}

module.exports = {
  index: index
};
