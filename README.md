
![[We crawl for FOOD][https://thawing-badlands-4075.herokuapp.com/]](https://i.imgur.com/caEldRa.png)
---



### Our Product:

- Our website is a place where you can _create_, _share_ or _join_ food crawls near you! 
	- [Click here to create your first Food Crawl!](https://thawing-badlands-4075.herokuapp.com/)

---
---


### Our Mission:
>At RESTful Crawl Inc, Our mission is to help You create, organize, and plan food crawls so your closest friends, family members or caring strangers, can join You on exploring unnique and tastful restaurants near You.

---
---
### Our Vision:
> Have caring & loving people - from all over the world-  _create_, _share_ or _join_ food local food cralws.


---
---

### About Us:
- We are a startup company located in Los Angeles - CA devoted to serving: the young, the innovative, the tech lovers, the friendly and the non-drinkers.  

- We are devoted on serving the food lovers and like minded people that would like to share food experiences with their friends, family or caring strangers.


####Group members:
**Name** | **GitHub** | **Email**
---------| ---------- | ---------
Adam **Allgood** | [GitHub](https://github.com/allgoodadam) | [allgoodadam@gmail.com](allgoodadam@gmail.com)
Jason **Ashara** | [GitHub](https://github.com/Ansel291) | [jasahara@yahoo.com](jasahara@yahoo.com)
Joey **Lin** | [GitHub](https://github.com/pujoey) | [pujoey@gmail.com](pujoey@gmail.com)
Ferdie **Quizon** | [GitHub](https://github.com/FerdieQ) | [fquizon@gmail.com](fquizon@gmail.com)
Sebastian **Salazar** | [GitHub](https://github.com/sebasa1984) | [sebastian@sasa.guru](sebastian@sasa.guru)

---
---


### Behind the scenes:

Behind every successful project there are countless hours dedicated towards planning, organizing and communicating project tasks, goals, milestones and issues. We invite to see the specific tools and framewords we used for this project:


* Visit our [slides.com](http://goo.gl/kQ1zjY) to see the project presentation we created on-deck.
* Visit our [moqups.com](https://app.moqups.com/pujoey@gmail.com/5jktYQOpyt/edit): to see the compelling wireframes we created.
* Visit our [trello.com](https://goo.gl/xe65Ov) to see how we organized, planned and communicated our goals, our milestones and our issues.
* Daily [stand up meetings](https://en.wikipedia.org/wiki/Stand-up_meeting) to communicate blockers, work-in-progress and up-coming tasks.

---
---


###Installations

####Package dependancies:
- Below is a snippet of our package.json so you can npm install all package dependancies.

```
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "dotenv": "^1.2.0",
    "ejs": "~2.3.3",
    "express": "~4.13.1",
    "express-session": "^1.12.1",
    "lodash": "^3.10.1",
    "mongoose": "^4.1.1",
    "morgan": "~1.6.1",
    "nonce": "^1.0.3",
    "underscore": "^1.8.3",
    "oauth-signature": "^1.3.0",
    "passport": "^0.3.2",
    "passport-google-oauth": "^0.2.0",
    "querystring": "^0.2.0",
    "request": "^2.67.0",
    "serve-favicon": "~2.3.0"
    }
```

####MongoLab:
- MongoLab is used to host the app's database
  - 3. seed data for seeding a mongo database is in seed.js, run with `node seed.js`
  - run this command to import the data:
  
```
mongoimport -h ds012345.mongolab.com:56789 -d dbname -c collectionname -u dbuser -p dbpassword --file filename.json
``-


####Heroku:
- Heroku is used for online deployment for the app
    - Run `heroku config:set` for each environment variable.
    - Database is running from MongoLab. Connecting the database requires the Heroku add-on for MongoLab.  The add-on is free, but it requires you to enter credit card information to validate the account.
    - [Heroku MongoLab plug-in](https://elements.heroku.com/addons/mongolab)


####Yelp API:
- Yelp API is used for getting the restaurant geo-location, ratings, reviews, images and  general information (website, opening hours, contact information).  **API key for Yelp is required**, check the Yelp API documentation to obtain a key:
  - [Yelp API](https://www.yelp.com/developers/documentation/v2/overview)
  

####Google OAuth API:  
- Google API is used for OAuth and mapping.  **API key for Google is required**, check the Google API documentation for obtaining a key:
  - [Google API](https://developers.google.com/identity/)

####Google Maps API:  
  
- Google Maps API will display the restaurant location.  **An account and API key for Google Maps is required**, check the Google API documentation for obtaining a key:
  - [Google Maps API](https://developers.google.com/maps/documentation/javascript/)

---
---

###Technologies Used

Planning & Organizing | Design | Development | APIs | Deployment
------------|------|-------------------
 Trello | Moqups | HTML| Google | Heroku
 LucidChart| LucidChart | CSS | Flickr | MongoLab
 | | Bootstrap | GeoNames |
 | | JavaScript/jQuery |
 | | Node.js |
 | | Express |
 | | MongoDB |
 | | GitHub |


##Goals Version no.1


1. [] As a user, I should be able to log in using Google+.
- [] As a user, I should be able to create a food crawl.
- [] As a user, I should be able to search restaurants (businesses).
- [] As a user, I should be able to RSVP other food crawls / leave.
- [] As a user, when a food crawl is over, the crawl should become inactive.
- [] As a user, I should be able to set a starting/ending times.
- [] As a user, I should be able to set a starting/ending dates.
- [] As a user, I should be able to see the restaurants on a map.
- [] As a user, I should be able to see the restaurant on a map.
- [] As a user, I should be able set destinations of my food crawl.
- [] As a user, I should be able to view everyones food crawls.
- [] As a visitor, I should be able to see the latest crawls
- [] As a user, I should be able to add a restaurant to my food crawl
- [] As a user, I should be able to

------


## Goals Version no.2
1. [] As a user, I should be able to delete people from my food crawl.
- [] As a user, I should be able to join a crawl that is in-progress.


------

##Technologies Used

1. Bootstrap
2. GitHub
3. Heroku
4. JavaScript
5. MongoDB
6. Mongoose
7. Node.js
6. Undescore.js

-----

##APIs used

1. Yelp Public API
2. Google Enterprise Public Maps
3. Google OAuth
4. Passport.js

--------


##Resful Crawl Documentation


###Please take noe when using the API:

- **No authentication** is required to access this API. All resources are open and available.

###Crawls:

A crawl returns the _id, title, date_of_crawl, description, user_id, starting date, ending date and the venue id for all crawls.

####GET crawls/

**Note:** This is a sepcial resource call. Always call /crawls


####Example request
GET: ```localhost:3000/crawls```

GET: ```localhost:3000/crawls/ID```

**Result:**

```[
{
_id: "5655f85f88b262c6c31b5c9a",
title: "Jasons crawl",
date_of_crawl: "2015-11-25T18:05:19.647Z",
description: "Eat even mor BBQ till we drop!!!",
user_id: "5655f85f88b262c6c31b5c91",
__v: 0,
locations: [
{
start: "1970-01-01T00:00:01.100Z",
end: "1970-01-01T00:00:01.400Z",
name: "Yuzu Shabu",
_id:""5655f85f88b262c6c31b5c9d",
]```

###Fields:


- **id:** - returns the crawl token id.
- **title:** - returns the crawl name. eg. Joey's Crawl.
- **date_of_crawl:** - returns the date & time the crawl was created. 
- **description:** - returns a brief description
- **user_id:** - returns the user token id.
- **start:** - returns to starting date of the crawl.
- **end:** - returns to the ending date of the crawl.
- **name:** - returns the name of the venue.







