module.exports = function(dice, res) {
  if (dice.format === 'html') {
    res.render('roll', {
      title: 'Add Dice',
      explain: dice.explain,
      work: dice.audit,
      result: dice.result
    });
  } else if (dice.format === 'json') {
    res.set('Content-Type', 'application/json');
    res.send(200, JSON.stringify(dice));
  } else {
    res.send(400, 'Format not supported');
  }
}