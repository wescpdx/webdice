
var util = require('util');

var webdice = {};

webdice.roll = function(req, res) {
  dice = {};
  dice.string = req.query.dice;
  dice.set = webdice.parse(dice.string);
  
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

webdice.parse = function(inString) {
  var set = {};
  var dstring = '';
  if (inString.indexOf('p') > -1) {
    dstring = inString.split('p')[0];
	set.plus = inString.split('p')[1];
  } else {
    dstring = inString;
  }
  if (dstring.indexOf('d') > -1) {
    set.num = dstring.split('d')[0];
	set.type = dstring.split('d')[1];
  } else {
    set.num = dstring;
  }
  set.plus = parseInt(set.plus);
  if (isNaN(set.plus)) {
    set.plus = 0;
  }
  set.num = parseInt(set.num);
  if (isNaN(set.num)) {
    set.num = 1;
  }
  set.type = parseInt(set.type);
  if (isNaN(set.type)) {
    set.type = 10;
  }
  return set;
}


module.exports = webdice;
