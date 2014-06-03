
var debug = {};

debug.objEnum = function(obj) {
  var output = '';
  for (var prop in obj) {
    output = output + "|" + prop + "|";
  }
  return output; 
}

module.exports = debug;