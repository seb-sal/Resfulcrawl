
![[We crawl for FOOD][https://thawing-badlands-4075.herokuapp.com/]](https://i.imgur.com/caEldRa.png)

* __Web App:__ [Click here](https://thawing-badlands-4075.herokuapp.com/)

* __KickStarter presentation:__        [Click here](http://goo.gl/kQ1zjY) 

* __Wireframe link:__      [Click here](https://goo.gl/xe65Ov)

---
#### Our commitment to our users:

(our mission)At RESTful Crawl Inc, Our mission is to help You create, organize, and plan food crawls so your closest friends, or caring strangers, can join You on exploring unnique and tastful restaurants in your area.

(who we are)We are a startup company, located in Los Angeles - CA devoted to serving: the young, the innovative, the tech lovers, the non-drinkers and the food lovers!

(our commitme)


> With a simply log



####Vision:
- 

#### What does our Web app do?
RESTful Crawl is an **interactive** and **user-friendly** web app that will let you create or join food crawls near your.



-----

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







