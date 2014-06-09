var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Home Page' });
});

router.get('/roll', require('./roll.js'));

module.exports = router;
