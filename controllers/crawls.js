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

var create = function(req, res) {
  console.log(req.body.locations);
  Crawl.create(req.body, function(err, crawl) {
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
