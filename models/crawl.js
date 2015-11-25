var mongoose = require('mongoose');

var crawlSchema = new mongoose.Schema({
  title: String,
  date_of_crawl: Date,
  description: String,
  members: Array,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  locations: [
    {
      start: Date,
      name: String,
      url: String,
      address: Array,
      phone: String,
      image_url: String
    }
  ]

});

var Crawl = mongoose.model('Crawl', crawlSchema);

module.exports = Crawl;
