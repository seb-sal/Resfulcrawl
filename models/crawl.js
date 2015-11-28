var mongoose = require('mongoose');

var crawlSchema = new mongoose.Schema({
  title: String,
  date_of_crawl: Date,
  description: String,
  members: Array,
  creator: String,
  locations: [
    {
      start: String,
      name: String,
      url: String,
      address: String,
      phone: String,
      image_url: String
    }
  ]

});

var Crawl = mongoose.model('Crawl', crawlSchema);

module.exports = Crawl;
