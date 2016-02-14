var fs = require('fs');


function QuoteGenerator() {
  this.quoteSource = 'out.json';
  this.elements = JSON.parse(fs.readFileSync(this.quoteSource, 'utf-8'));
  // console.log(this.elements.length)
}

QuoteGenerator.prototype.getRandomQuote = function() {
  return this.elements[Math.floor(Math.random() * this.elements.length)]
}

module.exports = QuoteGenerator;
