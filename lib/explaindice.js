numDice = function(num) {
  if (num == 1) {
    return '1 die';
  }
  return num + ' dice';
}

explainAdd = function(dice) {
  text = 'Rolling';
  text += numDice(dice.num);
  text += ' with ' + dice.type + ' sides';
  if (dice.plus > 0) {
    text += ', added to ' + dice.plus;
  }
  text += '. ';
  if (dice.explodes > 0) {
    if (dice.numexplodes === 0) {
      text += 'Dice are re-rolled any number of times ';
    } else {
      text += 'Dice are re-rolled up to ' + dice.numexplodes + ' times ';
    }
    text += 'if they score ' + dice.explodes + ' or better.';
  }
  return text;
}

explainCount = function(dice) {
  text = 'Rolling '
  text += numDice(dice.num);
  text += ' with ' + dice.type + ' sides';
  text += ' and counting how many roll at least ' + dice.atleast + '.';
  if (dice.explodes > 0) {
    text += 'Dice are re-rolled up to ' + dice.numexplodes + ' times if they score ' + dice.explodes + ' or better.';
  }
  return text;
}

explain = function(dice) {

  if (dice.action === 'add') {
    return explainAdd(dice);
  }
  if (dice.action === 'count') {
    return explainCount(dice);
  }

  return 'Unable to explain action "'+dice.action+'"';
}

module.exports = explain;