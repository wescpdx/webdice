parseQueryString = function(req) {
  dice = {};

  dice.action = req.query.action || 'add';

  dice.num = parseInt(req.query.num) || 1;
  dice.type = parseInt(req.query.type) || 10;

  if (dice.action === 'add') {
    dice.plus = parseInt(req.query.plus) || 0;
    dice.explodes = parseInt(req.query.explodes) || 0;
  } else if (dice.action === 'count') {
    dice.atleast = parseInt(req.query.atleast) || 8;
    if (dice.atleast > dice.type) {
      dice.atleast = dice.type;
    }
    dice.explodes = parseInt(req.query.explodes) || dice.type;
  }

  if (dice.explodes > 0) {
    dice.numexplodes = parseInt(req.query.numexplodes) || 0;
  }

  dice.format = req.query.format || 'html';

  return dice;
}

module.exports = parseQueryString;
