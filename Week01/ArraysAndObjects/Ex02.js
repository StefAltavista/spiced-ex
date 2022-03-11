//Code
function reverse(arr) {
    var arrCopy = arr.slice();
    return arrCopy.reverse();
}

//Test
var originalArray = [1, 2, 3];
var reversedArray = reverse(originalArray);

console.log(originalArray); // [1, 2, 3]
console.log(reversedArray); // [3, 2, 1]
