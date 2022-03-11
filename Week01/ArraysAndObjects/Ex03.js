//Code
function getLessThanZero(arr) {
    var negatives = arr.filter(function (val, idx) {
        return val < 0;
    });
    return negatives;
}

//Test
console.log(getLessThanZero([1, 2, -1, -90, 10])); //[-1, -90]
console.log(getLessThanZero([1, 2])); //[]
