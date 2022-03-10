var sum = function (n) {
    return function () {
        return n;
    };
};

var total = sum(1);
console.log(total);
