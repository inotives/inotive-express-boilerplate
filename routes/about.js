var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('about', {
    nav: config.nav_links
  });

});


module.exports = router;
