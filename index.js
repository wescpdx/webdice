
var server = require("./server");
var router = require("./router");
var newuser = require("./newuser");
var db = require("./db");

db.connect();

router.initialize(db.connection);
newuser.initialize(db.connection);
server.start(router.route);
