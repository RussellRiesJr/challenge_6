// What is the difference between the sum of the squares of the first ten natural numbers,
// and the square of the sum of the first ten natural numbers?


var natural = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var square = [];

for (var i = 0; i < natural.length; i++) {
  var double = natural[i] * natural[i];
  square.push(double);
}

var naturalSum = natural.reduce(add, 0);
var squareSum = square.reduce(add, 0);

function add(a, b) {
  return a + b;
}

var naturalSquare = naturalSum * naturalSum;

var answer = naturalSquare - squareSum;

console.log("Answer: ", answer);