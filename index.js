
var http = require('http');
var express = require('express');

var content = require('./content');
var webdice = require('./webdice');

var app = express();


app.get('/', content.homepage);
app.get('/roll', webdice.roll);

app.listen(8888);
