var index = function(req, res, next) {
  res.render('welcome/index');
};

module.exports = {
  index: index
};
