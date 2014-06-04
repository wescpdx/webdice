
var content = {};

content.homepage = function(reqt, res) {
  res.sendfile('index.html');
}

module.exports = content;