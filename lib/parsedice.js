
module.exports = function(inString) {
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