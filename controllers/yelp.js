var express = require('express');
var oauthSignature = require('oauth-signature');
var n = require('nonce')();
var qs = require('querystring');
var request = require('request');
var _ = require('lodash');
require('dotenv').load();


/* The type of request */
var httpMethod = 'GET';

/* The url we are using for the request */
var url = 'http://api.yelp.com/v2/search/?';


/* We set our secrets here */
var consumerSecret = process.env.YELP_CONSUMER_SECRET;
var tokenSecret = process.env.YELP_TOKEN_SECRET;

/* GET /venues?place[name]&place[query] (INDEX) */
var index = function(req, res, next) {

  /* We set the require parameters here */
  var required_parameters = {
    oauth_consumer_key : process.env.YELP_CONSUMER_KEY,
    oauth_token : process.env.YELP_TOKEN,
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };


  /* We can setup default parameters here */
  var default_parameters = {
    location: req.query.name,
    radius: req.query.radius,
    limit: '15',
    category_filter: 'restaurants'
  };

  /* We combine all the parameters in order of importance */
  var parameters = _.assign(default_parameters, required_parameters);

  // Then we call Yelp's Oauth 1.0a server, and it returns a signature
  // Note: This signature is only good for 300 seconds after the oauth_timestamp
  var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

  console.log(signature);
  /* We add the signature to the list of paramters */
  parameters.oauth_signature = signature;

  /* Then we turn the paramters object, to a query string */
  var paramURL = qs.stringify(parameters);


  var apiURL = url + paramURL;


  request.get({uri: apiURL, json: true}, function(err, response, body) {
    console.log(err);
    console.log(body.businesses);
    // console.log(body);
    res.render(
      'venues/index',
      {
        venues: body.businesses || [],
        user: req.user
      }
    );
  });
};


module.exports = {
  index: index
};
