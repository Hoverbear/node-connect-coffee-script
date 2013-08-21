
// npm install connect
// node server.js
// curl http://localhost:3000/js/test.js

var coffeeScript = require('coffee-script');
var connectCoffeeScript = require('..');
var connect = require('connect');

var app = connect();


app.use(require("..")({
  src: __dirname + '/client/coffee',
  dest: __dirname + '/client/js',
}));

app.use(connect.static(__dirname + '/client/'));

app.listen(3000)

console.log('http://localhost:3000/js/test.js');
