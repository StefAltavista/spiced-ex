var x;
var doubleX;

x = 999;

function timesTwo(n) {
    return n * 2;
}

doubleX = timesTwo(x);

var numbers;

numbers = [x, doubleX];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers = {};

numbers.y = doubleX;

console.log(numbers);
