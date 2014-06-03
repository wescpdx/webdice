
var db = {};

db.connect = function() {
  this.databaseUrl = "wescon:Quimax11@ds053158.mongolab.com:53158/wescon"; // "username:password@example.com/mydb"
  this.collections = ["users"]
  this.connection = require("mongojs").connect(this.databaseUrl, this.collections);
}

module.exports = db;
