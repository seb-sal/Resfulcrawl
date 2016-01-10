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


// findByName
var search = function(req, res, next) {
  console.log(req.params.name);
  Crawl.findOne({ "crawls.title": req.params.name}),function(error, crawl){
    if (error) { console.log(error); }
    res.json(crawl);
  };
};

var destroy = function(req, res) {
  Crawl.findByIdAndRemove(req.params.id, function(err, record){
    if (err) res.send(err);
    res.send(record.title + " has been deleted!");
  });
};


var update = function(req, res) {
console.log(req);
  Crawl.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, record){
    if(err) {
      res.send(err);
    };
    console.log(record);
    res.send(record);
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

var rsvpCrawl = function(req, res) {
  Crawl.findById(req.params.id, function(err, record){
    if(err) {
      res.send(err);
    }
      record.members.push(req.user._id);
      record.save();
      res.send(record);
      console.log(record);
  });
}

module.exports = {
  index: index,
  show: show,
  search: search,
  create: create,
  destroy: destroy,
  update: update,
  rsvpCrawl: rsvpCrawl
};
