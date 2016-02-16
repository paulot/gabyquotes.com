var express = require('express');
var app = express();
var quotes = new (require('./quote_generator'))();
var fs = require('fs');

app.use("/styles", express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/html'));

app.get('/random', function(req, res) {
  var quote = quotes.getRandomQuote.bind(quotes)();
  console.log(quote);
  res.json(quote);
});

app.get('/', function(req, res) {
  res.sendfile(__dirname, 'index.html');
});



app.listen(3000, function() {
  console.log('Gabyquotes running on port 3000');
});
