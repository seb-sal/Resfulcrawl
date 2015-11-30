var mongoose = require('./config/database');

var Crawl = require('./models/crawl');


      var crawls = [
        {
          title:     "Joeys crawl2, RSVP NOW",
          date_of_crawl: new Date(),
          description:  "Eat Mor BBQ till we drop!!!",
          members: ["http://i.imgur.com/HHDHoBn.png", "https://i.imgur.com/zXMqMgb.png", "https://i.imgur.com/Q8gQG91.png", "https://i.imgur.com/50Rm6DU.png"],
          locations: [
            {
              start: 1800,
              end: 1900,
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
              ] //category
            }, // restaurant
            {
              start: 1700,
              end: 2200,
              name: "Wood Ranch BBQ & Grill",
              url: "http://www.yelp.com/biz/wood-ranch-bbq-and-grill-cerritos",
              address: [
                    "12801 Towne Ctr Dr",
                    "Cerritos, CA 90703"
                ],
              rating: "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
              review_count: 31,
              snippet_text: "Excellent Korean food. So homely and nostalgic. I love their seollungtang, gamjatang and galbitang. The Korean ajummas are always super sweet and friendly....",
              Snippet_image_url: "http://s3-media2.fl.yelpcdn.com/photo/-ZRahoeORbCmljSIZzjnEA/ms.jpg",
              phone: "5624038889",
              image_url: "http://s3-media4.fl.yelpcdn.com/bphoto/6PHBYSeZWNUFvkkysl1coA/ms.jpg",
              categories: [
                [
                    "Korean",
                    "korean"
                ]
              ] //category
            }, //restaurant
            {
              start: 1100,
              end: 1400,
              name: "Yuzu Shabu",
              url: "http://www.yelp.com/biz/yuzu-shabu-cerritos",
              address: [
                    "11466 South St",
                    "Cerritos, CA 90703"
                ],
              rating: "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
              review_count: 454,
              snippet_text: "Great meat selection!! So many soup base choices!! Great service !! Lynna, Nicole, & Veronica were so great ! Music is amazingly awesome! Will be returning...",
              Snippet_image_url: "http://s3-media3.fl.yelpcdn.com/photo/yRqs0W3MOhsfOPZa6zU5gQ/ms.jpg",
              phone: "5629915199",
              image_url: "http://s3-media1.fl.yelpcdn.com/bphoto/iEgn6EGWKk3Mptnc55Cu8g/ms.jpg",
              categories: [
                [
                    "Japanese",
                    "japanese"
                ],
                [
                    "Asian Fusion",
                    "asianfusion"
                ],
                [
                    "Hot Pot",
                    "hotpot"
                ]
              ] //category
            } //restaurant
          ]  //location
        }, //crawls
        {
          title:     "Adams crawl, RSVP NOW",
          date_of_crawl: new Date(),
          description:  "Eat mor BBQ till we drop!!!",
          members: ["https://i.imgur.com/zXMqMgb.png", "https://i.imgur.com/Q8gQG91.png", "https://i.imgur.com/50Rm6DU.png", "http://i.imgur.com/HHDHoBn.png"],
          locations: [
            {
              start: 1700,
              end: 2200,
              name: "Wood Ranch BBQ & Grill",
              url: "http://www.yelp.com/biz/wood-ranch-bbq-and-grill-cerritos",
              address: [
                    "12801 Towne Ctr Dr",
                    "Cerritos, CA 90703"
                ],
              rating: "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
              review_count: 31,
              snippet_text: "Excellent Korean food. So homely and nostalgic. I love their seollungtang, gamjatang and galbitang. The Korean ajummas are always super sweet and friendly....",
              Snippet_image_url: "http://s3-media2.fl.yelpcdn.com/photo/-ZRahoeORbCmljSIZzjnEA/ms.jpg",
              phone: "5624038889",
              image_url: "http://s3-media4.fl.yelpcdn.com/bphoto/6PHBYSeZWNUFvkkysl1coA/ms.jpg",
              categories: [
                [
                    "Korean",
                    "korean"
                ]
              ] //category
            }, //restaurant
            {
              start: 1800,
              end: 1900,
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
              ] //category
            }, // restaurant
            {
              start: 1100,
              end: 1400,
              name: "Yuzu Shabu",
              url: "http://www.yelp.com/biz/yuzu-shabu-cerritos",
              address: [
                    "11466 South St",
                    "Cerritos, CA 90703"
                ],
              rating: "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
              review_count: 454,
              snippet_text: "Great meat selection!! So many soup base choices!! Great service !! Lynna, Nicole, & Veronica were so great ! Music is amazingly awesome! Will be returning...",
              Snippet_image_url: "http://s3-media3.fl.yelpcdn.com/photo/yRqs0W3MOhsfOPZa6zU5gQ/ms.jpg",
              phone: "5629915199",
              image_url: "http://s3-media1.fl.yelpcdn.com/bphoto/iEgn6EGWKk3Mptnc55Cu8g/ms.jpg",
              categories: [
                [
                    "Japanese",
                    "japanese"
                ],
                [
                    "Asian Fusion",
                    "asianfusion"
                ],
                [
                    "Hot Pot",
                    "hotpot"
                ]
              ] //category
            } //restaurant
          ]  //location
        }, //adams crawls
        {
          title:     "Jasons crawl, RSVP NOW",
          date_of_crawl: new Date(),
          description:  "Eat even mor BBQ till we drop!!!",
          members: ["https://i.imgur.com/50Rm6DU.png", "https://i.imgur.com/zXMqMgb.png", "https://i.imgur.com/Q8gQG91.png", "http://i.imgur.com/HHDHoBn.png"],
          locations: [
            {
              start: 1100,
              end: 1400,
              name: "Yuzu Shabu",
              url: "http://www.yelp.com/biz/yuzu-shabu-cerritos",
              address: [
                    "11466 South St",
                    "Cerritos, CA 90703"
                ],
              rating: "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
              review_count: 454,
              snippet_text: "Great meat selection!! So many soup base choices!! Great service !! Lynna, Nicole, & Veronica were so great ! Music is amazingly awesome! Will be returning...",
              Snippet_image_url: "http://s3-media3.fl.yelpcdn.com/photo/yRqs0W3MOhsfOPZa6zU5gQ/ms.jpg",
              phone: "5629915199",
              image_url: "http://s3-media1.fl.yelpcdn.com/bphoto/iEgn6EGWKk3Mptnc55Cu8g/ms.jpg",
              categories: [
                [
                    "Japanese",
                    "japanese"
                ],
                [
                    "Asian Fusion",
                    "asianfusion"
                ],
                [
                    "Hot Pot",
                    "hotpot"
                ]
              ] //category
            }, //restaurant
            {
              start: 1700,
              end: 2200,
              name: "Wood Ranch BBQ & Grill",
              url: "http://www.yelp.com/biz/wood-ranch-bbq-and-grill-cerritos",
              address: [
                    "12801 Towne Ctr Dr",
                    "Cerritos, CA 90703"
                ],
              rating: "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
              review_count: 31,
              snippet_text: "Excellent Korean food. So homely and nostalgic. I love their seollungtang, gamjatang and galbitang. The Korean ajummas are always super sweet and friendly....",
              Snippet_image_url: "http://s3-media2.fl.yelpcdn.com/photo/-ZRahoeORbCmljSIZzjnEA/ms.jpg",
              phone: "5624038889",
              image_url: "http://s3-media4.fl.yelpcdn.com/bphoto/6PHBYSeZWNUFvkkysl1coA/ms.jpg",
              categories: [
                [
                    "Korean",
                    "korean"
                ]
              ] //category
            }, //restaurant
            {
              start: 1800,
              end: 1900,
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
              ] //category
            } // restaurant
          ]  //location
        } //adams crawls
      ];


      // create their default blubs, and then resets the contents of
      // blubs for use in the callback
      Crawl.create(crawls, function(err, crawls) {

        if (err) {
          console.log(err);
        } else {
          console.log(
            "Database seeded with " + crawls.length + " crawls."
          );
          mongoose.disconnect();
        }
      });

