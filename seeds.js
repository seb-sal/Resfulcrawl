var mongoose = require('./config/database');

var User = require('./models/user');
var Crawl = require('./models/crawl');


var users = [
  { // 0
    prof_name: "Joey Lin",
    prof_email:   "joey1@gmail.com",
    prof_picture: "http://i.imgur.com/HHDHoBn.png"
  },
  { // 1
    prof_name: "Ferdie Quizon",
    prof_email:   "ferdie1@gmail.com",
    prof_picture: "http://i.imgur.com/HHDHoBn.png"
  }
];


var crawls = [
  { // 0
    title: "Joey's crawl",
    date_of_crawl:   new Date();,
    prof_picture: "http://i.imgur.com/HHDHoBn.png"
  },
  { // 1
    prof_name: "Ferdie Quizon",
    prof_email:   "ferdie1@gmail.com",
    prof_picture: "http://i.imgur.com/HHDHoBn.png"
  }
];

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
      mongoose.disconnect();
    }
  });
});




var mongoose = require('./config/database');

var Crawl = require('./models/crawl');
var User = require('./models/user');

var users = [
  { // 0
    prof_name: "Joey Lin",
    prof_email:   "joey1@gmail.com",
    prof_picture: "http://i.imgur.com/HHDHoBn.png"
  },
  { // 1
    prof_name: "Ferdie Quizon",
    prof_email:   "ferdie1@gmail.com",
    prof_picture: "http://i.imgur.com/HHDHoBn.png"
  }
];

// remove any blubs in the db
Crawl.remove({}, function(err) {
  if (err) console.log(err);

  // remove any users in the db
  User.remove({}, function(err) {
    if (err) console.log(err);

    // create the default users, and then resets the contents of
    // users for use in the callback
    User.create(users, function(err, users) {

      var crawls = [
        {
          title:     "Joeys crawl",
          date_of_crawl: new Date(),
          description:  "Eat BBQ till we drop!!!",
          members: [user[0]._id, user[1]._id],
          user_id: user[0]._id,
          locations: [
            {
              start: 18:00,
              end: 19:00,
              name: "Gen Korean BBQ House",
              url: "http://www.yelp.com/biz/gen-korean-bbq-house-cerritos",
              address: [
                    "11472 South St",
                    "Cerritos, CA 90703"
                ],
              rating: "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
              review_count: 2329,
              snippet_text: "For this being my very first time eating at Gen, I had a great experience! (:\n\nMeat, sides, and beverages were top notch. I suggest trying their #1 (Gen...",
              Snippet_image_url: "http://s3-media1.fl.yelpcdn.com/photo/7ePdM-8PamSkfxdzGpNOAQ/ms.jpg",
              phone: "5629915411",
              image_url: "http://s3-media1.fl.yelpcdn.com/bphoto/H5n-rgWXtzkzclycXHfKzw/ms.jpg",
              categories: [
                [
                    "Korean",
                    "korean"
                ],
                [
                    "Barbeque",
                    "bbq"
                ]
            ]
            }
          ]
        }
      ];

      // create their default blubs, and then resets the contents of
      // blubs for use in the callback
      Blub.create(blubs, function(err, blubs) {

        if (err) {
          console.log(err);
        } else {
          console.log(
            "Database seeded with " + users.length  + " users, and " +
            blubs.length + " blubs."
          );
          mongoose.disconnect();
        }

      });
    });
  });
});
