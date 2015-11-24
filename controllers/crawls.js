

var index = function(req, res, next) {
  console.log(req);
  Crawl.find({}, function(error, crawls) {
    res.json();
  });
}

module.exports = {
  index: index
};
