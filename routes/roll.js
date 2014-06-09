roll = function(req, res) {
  dice = {};
  dice.set = {};

  dice.action = req.query.action || 'add';

  dice.set.num = parseInt(req.query.num) || 1;
  dice.set.type = parseInt(req.query.type) || 10;
  dice.set.plus = parseInt(req.query.plus) || 0;

  dice.explain = require('../lib/explaindice')(dice);

  dice.result = dice.set.plus + 0;
  dice.rolls = {};

  dice.work = '';
  for (var i = 1; i < dice.set.num+1; i++) {
    dice.rolls[i] = Math.floor((Math.random() * dice.set.type) + 1);
    dice.result += dice.rolls[i];
  }

  if (typeof(req.query.format) == 'undefined' || req.query.format == 'html') {
    res.render('roll', {
      title: 'Add Dice',
      explain: dice.explain,
      work: dice.rolls,
      result: dice.result
    });
  } else if (req.query.format == 'json') {
    res.set('Content-Type', 'application/json');
    res.send(200, JSON.stringify(dice));
  } else {
    res.send(400, 'Format not supported');
  }
}

module.exports = roll;