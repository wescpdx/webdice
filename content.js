
var content = {};

content.homepage = function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.end('This is the homepage');
}

module.exports = content;