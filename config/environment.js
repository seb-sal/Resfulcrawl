var _ = require('lodash');

var localEnvVars = {
  TITLE:      'Resfulcrawl',
  SAFE_TITLE: 'Resfulcrawl'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
