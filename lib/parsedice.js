parseQueryString = function(req) {
  dice = {};

  dice.action = req.query.action || 'add';

  dice.num = parseInt(req.query.num) || 1;
  dice.type = parseInt(req.query.type) || 10;
  dice.plus = parseInt(req.query.plus) || 0;

  dice.format = req.query.format || 'html';

  return dice;
}

module.exports = parseQueryString;
