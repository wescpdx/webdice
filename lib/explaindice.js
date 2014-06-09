explain = function(dice) {

  text = 'Rolling';

  if (dice.set.num == 1) {
    text += ' 1 die';
  } else {
    text += ' ' + dice.set.num + ' dice';
  }
  text += ' with ' + dice.set.type + ' sides';
  if (dice.set.plus > 0) {
    text += ', added to ' + dice.set.plus;
  }

  return text;
}

module.exports = explain;