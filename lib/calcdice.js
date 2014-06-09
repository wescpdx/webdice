calcAddAction = function(dice) {
  dice.result = dice.plus + 0;
  dice.rolls = {};
  dice.work = '';
  for (var i = 1; i < dice.num+1; i++) {
    dice.rolls[i] = Math.floor((Math.random() * dice.type) + 1);
    dice.result += dice.rolls[i];
  }
  return dice;
}

calcDice = function(dice) {
  if (dice.action === 'add') {
    return calcAddAction(dice);
  }
  dice.error = 'Action not supported.';
  return dice;
}

module.exports = calcDice;
