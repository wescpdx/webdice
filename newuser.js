
var url = require("url");
var qs = require('querystring');

var newuser = {};
var dbInit = '';

newuser.initialize = function(db) {
  dbInit = db;
}

newuser.add = function(request) {
  var query = url.parse(request.url).query;
  var user = {};
  user.name = qs.parse(query).name;
  user.value = qs.parse(query).value;
  
  dbInit.users.save(user, function(err, saved) {
    if (err || !saved) console.log("User not saved");
    else console.log("User "+user.name+" saved");
});

}

module.exports = newuser;