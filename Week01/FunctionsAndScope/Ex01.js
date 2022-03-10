function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result = result + arguments[i];
    }

    return result;
}

/*
function sum() {
    var result = 0;

    if (arguments.length > 0) {
        result = arguments[0] + result;
        delete arguments[0];
        sum(arguments);
    } else return result;
    //if (arguments.length > 0) {
}
*/

console.log(sum(5, 10)); //15

console.log(sum(5, 10, 15)); //30;

console.log(sum(5, 10, 15, 100, 200)); //330
