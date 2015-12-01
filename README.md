
#[![We Crawl for Food](https://i.imgur.com/caEldRa.png)](https://thawing-badlands-4075.herokuapp.com/)


---



### Our Product

- Our website is a place where you can _create_, _share_ or _join_ food crawls near you! 
	- [Click here to create your first Food Crawl!](https://thawing-badlands-4075.herokuapp.com/)

---
---


### Our Mission
>At RESTful Crawl Inc, Our mission is to help You create, organize, and plan food crawls so your closest friends, family members or caring strangers, can join You on exploring unnique and tastful restaurants near You.

---
---
### Our Vision
> Have caring & loving people - from all over the world-  _create_, _share_ or _join_ food local food cralws.


---
---

### About Us
- We are a startup company located in Los Angeles - CA devoted to serving: the young, the innovative, the tech lovers, the friendly and the non-drinkers.  

- We are devoted on serving the food lovers and like minded people that would like to share food experiences with their friends, family or caring strangers.


#### Group members:
**Name** | **GitHub** | **Email**
---------| ---------- | ---------
Adam **Allgood** | [GitHub](https://github.com/allgooda) | [allgoodadam@gmail.com](allgoodadam@gmail.com)
Jason **Ashara** | [GitHub](https://github.com/Ansel291) | [jasahara@yahoo.com](jasahara@yahoo.com)
Joey **Lin** | [GitHub](https://github.com/pujoey) | [pujoey@gmail.com](pujoey@gmail.com)
Ferdie **Quizon** | [GitHub](https://github.com/FerdieQ) | [fquizon@gmail.com](fquizon@gmail.com)
Sebastian **Salazar** | [GitHub](https://github.com/sebasa1984) | [sebastian@sasa.guru](sebastian@sasa.guru)

---
---


### Behind the scenes

Behind every successful project there are countless hours dedicated towards planning, organizing and communicating project tasks, goals, milestones and issues. We invite to see the specific tools and framewords we used for this project:


* Visit our [slides.com](http://goo.gl/kQ1zjY) to see the project presentation we created on-deck. 
* See our final presentation [here](http://slides.com/sebastiansalazar/resful-crawl-presentation-1#/).
* Visit our [moqups.com](https://app.moqups.com/pujoey@gmail.com/5jktYQOpyt/edit): to see the compelling wireframes we created.
* Visit our [trello.com](https://trello.com/b/SMSwN4DV/five-guys) to see how we organized, planned and communicated our goals, our milestones and our issues.
* Daily [stand up meetings](https://en.wikipedia.org/wiki/Stand-up_meeting) to communicate blockers, work-in-progress and up-coming tasks.

---
---

### Project requirements

Our team must:

- **Present an idea** to the instructors with a **deck**,
  covering the period of [project inception][inception], that includes:
  - a list of included technologies
  - a list of third-party APIs consumed (if any)
  - which OAuth provider(s) your app will use for authentication
  - wireframes for the central interactions, and
  - an underlying data model.
- **Document your app's RESTful API**.
- **Craft thoughtful user stories together**, as a team, and manage
  and distribute those user stories to team members based on skills and
  interests using **Trello**.
- **Manage team contributions and collaboration** using Git, GitHub and
  a standard team work-flow.
- **Present the app at the end of the sprint** as a team.
- **Perform a team-wide retro** and at least one **code-review** after
  the completion of the sprint.

The app must:

- Use **MongoDB & Express** to CRUD your data.
- **Produce a RESTful API that exposes at least one model**.
- **Consume its own API using AJAX**.
- **Authenticate users using at least one OAuth provider**.
- **Restrict access to the Creation, Updating & Deletion of resource(s) 
  using an authorization middleware function**.
- Be **deployed online** using **Heroku**.

You do not need to, but may:

- Make a single-page app (SPA); you can have multiple views and EJS as
  necessary, due to technical constraints.
- Use Web Sockets; while you must use AJAX to dynamically generate
  HTML from a JSON API, you may or may not add a Web Socket interface.

---
---

### Marginal Viable Product (MVP)

Below is a list of the current actions (also known as user stories, behaviors or features)a user can succsesfully perform in our app:


1. As a user, I should be able to log in using Google+.
- As a user, I should be able to create a food crawl.
- As a user, I should be able to search restaurants (businesses).
- As a user, I should be able to RSVP other food crawls.
- As a user, I should be able to delete my food crawl.
- As a user, I should be able to set a starting time.
- As a user, I should be able to set a starting date.
- As a user, I should be able to see the restaurants locations on a map.
- As a user, I should be able pick multiple restaurants for my food crawl.
- As a user, I should be able to view everyones food crawls.
- As a visitor, I should be able to see the latest crawls.
- As a visitor, I should not be able to joing a food crawl.
- A user should not be able to delete another users crawl.



### Icebox:

Below is a list of the nice-to-have features (created as user stories) that we will have for our second version:

1. As a user, I should be able to delete people from my food crawl.
- As a user, I should be able to join a crawl that is in-progress.
- As a user, when a food crawl is over, the crawl should become inactive.
- As a user, I should be able to delete people from my food crawl.
- As a user, I should be able to join food crawls that are in-progress.
- A food crawl should become inactive (automatically) when completed.
- A user that joins a crawl should be able to see the complete crawl information.


### Project scope

The MVP will take us approximately 120 hours to complete. A total of 15 business days.

Here's the project scope broken down into hours:

Project Phase | Hours required
---|---
Planning | 8 hours
Designing | 24 hours
Development | 56 hours
QA | 12 hours
Error padding | 16 hours
**Total no. of hours** | **116**

---
---

### Installations required

#### Package dependancies:
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

#### MongoLab:
- MongoLab is used to host the app's database
  - 3. seed data for seeding a mongo database is in seed.js, run with `node seed.js`
  - run this command to import the data:
  
```
mongoimport -h ds012345.mongolab.com:56789 -d dbname -c collectionname -u dbuser -p dbpassword --file filename.json
```


#### Heroku:
- Heroku is used for online deployment for the app
    - Run `heroku config:set` for each environment variable.
    - Database is running from MongoLab. Connecting the database requires the Heroku add-on for MongoLab.  The add-on is free, but it requires you to enter credit card information to validate the account.
    - [Heroku MongoLab plug-in](https://elements.heroku.com/addons/mongolab)


#### Yelp API:
- Yelp API is used for getting the restaurant geo-location, ratings, reviews, images and  general information (website, opening hours, contact information).  **API key for Yelp is required**, check the Yelp API documentation to obtain a key:
  - [Yelp API](https://www.yelp.com/developers/documentation/v2/overview)
  

#### Google OAuth API:  
- Google API is used for OAuth and mapping.  **API key for Google is required**, check the Google API documentation for obtaining a key:
  - [Google API](https://developers.google.com/identity/)

#### Google Maps API:  
  
- Google Maps API will display the restaurant location.  **An account and API key for Google Maps is required**, check the Google API documentation for obtaining a key:
  - [Google Maps API](https://developers.google.com/maps/documentation/javascript/)

---
---


### Technologies used


Communication | Collaboration | Design | Development | APIs | Deployment
----| ---| --- | --- | --- | ---
 [Standup meetings](https://en.wikipedia.org/wiki/Stand-up_meeting)| [Trello](https://trello.com/)| [Moqups](moqups.com)| [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)| [Yelp](https://www.yelp.com/developers/documentation/v2/overview) | [Heroku](http://heroku.com/)
 [Slack](https://slack.com/) | | [LucidChart](http://lucidchart.com/) | [CSS](http://www.w3schools.com/css/) | [Google Maps](https://developers.google.com/maps/documentation/javascript/) | [MongoLab](https://mongolab.com/)
 [Markdown](https://guides.github.com/features/mastering-markdown/)|  | | [Bootstrap](http://getbootstrap.com/) | [Google OAuth](https://developers.google.com/identity/) |
 [Slides](http://slides.com/) |  | | [JavaScript/jQuery](https://www.javascript.com/) | [Passport.js](http://passportjs.org/)
 [Agile management](https://en.wikipedia.org/wiki/Agile_management)|  | | [Node.js](https://nodejs.org/en/) |
 |  | | [Express](http://expressjs.com/) |
 |  | | [MongoDB](https://docs.mongodb.org/manual/) |
 |  | | [Mongoose](http://mongoosejs.com/) |
 |  | | [GitHub](https://github.com/) |
 |  | | [Sublime](http://www.sublimetext.com/) |



---
---



### API Documentation:

Method|Parameters|Description|
-------------|------|-----------|
`show`|`/users/:id`|a user can see a specific user by id.
`index`|`/crawls`|a user can see all crawls.
`post`|`/crawls/`|a user can create/ add a new crawl.
`post`|`/crawls/:id`|a user can RSVP for a crawl.
`show`|`/crawls/:id`|a user can see a specific crawl by the id.
`put`|`/crawls/:id`|a user can edit the title, date and description of a crawl.
`destroy`|`/crawls/:id`|a user can delete their crawl.

#### Example request:
GET: ```localhost:3000/crawls```

GET: ```localhost:3000/crawls/Id```

**Result:**

`[ {
_id: "5655f85f88b262c6c31b5c9a",
title: "Jasons crawl",
date_of_crawl: "2015-11-25T18:05:19.647Z",
description: "Eat even mor BBQ till we drop!!!",
user_id: "5655f85f88b262c6c31b5c91",
__v: 0,
locations: [ {
start: "1970-01-01T00:00:01.100Z",
end: "1970-01-01T00:00:01.400Z",
name: "Yuzu Shabu",
_id:""5655f85f88b262c6c31b5c9d",
]`



####User Model

Parameters|Value|Description
----------|-----|-----------|
`_id` | String | Generated by mongo.
`prof_name`|String|*captured by Google OAuth API*.
`prof_email`|String|*captured by Google OAuth API*.
`prof_picture`|String|*captured by Google OAuth API*.
`googleId`|String|*captured by Google OAuth API*.




####Crawl Model

Key | Value | Description
--- | --- | --- |
`id` | String| returns the crawl token id. | 
`title` | String |  returns the crawl name. eg. Joey's Crawl.
`date_of_crawl` | Date |  returns the date & time the crawl was created. 
`description` | String |  returns a brief description of the crawl.
`creator` | String |  returns the user token id.
`locations`| Array of location objects |  returns all locations of the crawl.



####Locations Model


Key | Value | Description
--- | --- | --- |
`start` | String| returns start time of the crawl. | 
`name` | String| returns the name of the crawl | 
`url` | String| *captured by Yelp API*. | 
`address` | String| *captured by Yelp API*.  | 
`phone` | String| *captured by Yelp API*.  | 
`image_url` | String| *captured by Yelp API*.  | 



####Venues Model



Key | Value | Description
--- | --- | --- |
`name` | String| *captured by Yelp API*. | 


---
---
### END








