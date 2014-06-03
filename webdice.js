
var util = require('util');

var webdice = {};

webdice.roll = function(request, response) {
  dice = {};
  dice.string = request.query.dice;
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

  
  if (request.query.format == 'json') {
    response.setHeader('Content-Type', 'text/plain');
	response.end(JSON.stringify(dice));
  } else {
    response.setHeader('Content-Type', 'text/html');
    response.end(dice.html);
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
	set.plus = 0;
  }
  if (dstring.indexOf('d') > -1) {
    set.num = dstring.split('d')[0];
	set.type = dstring.split('d')[1];
  } else {
    set.num = dstring;
	set.type = 1;
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
    set.type = 1;
  }
  return set;
}


module.exports = webdice;
