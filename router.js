
var url = require("url");

var router = {};
var dbInit = '';

router.initialize = function(db) {
  dbInit = db;
}

router.route = function (request) {
  pathname = url.parse(request.url).pathname;
  console.log("About to route a request for " + pathname);
  if (pathname == '/newuser') {
    router.destination = require("./newuser").add(request);
  }
}

module.exports = router;

