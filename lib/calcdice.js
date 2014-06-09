calcAddAction = function(dice) {
  var explodeCount = 0;
  var newRoll = 0;
  dice.result = dice.plus + 0;
  dice.audit = {};
  for (var i = 1;
       i < dice.num+1;
       i++) {
    newRoll = Math.floor((Math.random() * dice.type) + 1);
    dice.result += newRoll;
    dice.audit[i] = ''+newRoll;
    if (dice.explodes > 0 && newRoll >= dice.explodes) {
      explodeCount = 0;
      do {
        explodeCount++;
        newRoll = Math.floor((Math.random() * dice.type) + 1);
        dice.result += newRoll;
        dice.audit[i] += '+' + newRoll;
      }
      while ((dice.numexplodes === 0 || explodeCount < dice.numexplodes) && newRoll >= dice.explodes);
    }
  }
  return dice;
}

calcCountAction = function(dice) {
  var explodeCount = 0;
  var newRoll = 0;
  dice.result = 0;
  dice.audit = {};
  for (var i = 1;
       i < dice.num+1;
       i++) {
    newRoll = Math.floor((Math.random() * dice.type) + 1);
    if (newRoll >= dice.atleast) {
      dice.result++;
    }
    dice.audit[i] = newRoll;
    if (dice.explodes > 0 && newRoll >= dice.explodes) {
      explodeCount = 0;
      do {
        explodeCount++;
        newRoll = Math.floor((Math.random() * dice.type) + 1);
        if (newRoll >= dice.atleast) {
          dice.result++;
        }
        dice.audit[i] += '+' + newRoll;
      }
      while ((dice.numexplodes === 0 || explodeCount < dice.numexplodes) && newRoll >= dice.explodes);
    }
  }
  return dice;
}

calcDice = function(dice) {
  if (dice.action === 'add') {
    return calcAddAction(dice);
  }
  if (dice.action === 'count') {
    return calcCountAction(dice);
  }
  dice.error = 'Action not supported.';
  return dice;
}

module.exports = calcDice;
