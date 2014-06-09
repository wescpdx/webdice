roll = function(req, res) {
  dice = require('../lib/parsedice')(req);
  dice.explain = require('../lib/explaindice')(dice);
  dice = require('../lib/calcdice')(dice);
  require('../lib/sendoutput')(dice, res);
}

module.exports = roll;
