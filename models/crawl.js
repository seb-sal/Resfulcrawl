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
      end: Date,
      name: String,
      url: String,
      address: Array,
      rating: String,
      review_count: Number,
      snippet_text: String,
      Snippet_image_url: String,
      phone: String,
      image_url: String,
      categories: Array
    }
  ]

});

var Crawl = mongoose.model('Crawl', crawlSchema);

module.exports = Crawl;
