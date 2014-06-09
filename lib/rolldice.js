module.exports = function(req, res) {
  dice = {};
  dice.set = {};

  dice.action = req.query.action || 'add';

  dice.set.num = parseInt(req.query.num) || 1;
  dice.set.type = parseInt(req.query.type) || 10;
  dice.set.plus = parseInt(req.query.plus) || 0;

  dice.html = '<p>Rolling';

  if (dice.set.num == 1) {
    dice.html += ' 1 die';
  } else {
    dice.html += ' '+dice.set.num+' dice';
  }
  dice.html += ' with '+dice.set.type+' sides';
  if (dice.set.plus > 0) {
    dice.html += ', added to '+dice.set.plus;
  }
  dice.html += '...</p><p>';

  dice.result = dice.set.plus + 0;
  dice.rolls = [];

  for (var i = 1; i < dice.set.num+1; i++) {
    dice.html += 'Roll '+i+': ';
	dice.rolls[i] = Math.floor((Math.random() * dice.set.type) + 1);
	dice.html += dice.rolls[i]+'<br>';
	dice.result += dice.rolls[i];
  }

  dice.html += '</p><h1>Result: '+dice.result+'</h1>';

  if (typeof(req.query.format) == 'undefined' || req.query.format == 'html') {
    res.set('Content-Type', 'text/html');
    res.send(200, dice.html);
  } else if (req.query.format == 'json') {
    res.set('Content-Type', 'application/json');
	res.send(200, JSON.stringify(dice));
  } else {
    res.send(400, 'Format not supported');
  }
}
