function logType(arg) {
    var type = typeof arg;
    switch (type) {
        case "undefined":
            console.log("undefined!");
            break;
        case "null":
            console.log("null!");
            break;
        case "number":
            isNaN(arg) ? console.log("not a number!") : console.log("number!");
            break;

        case "string":
            console.log("string!");
            break;
        case "boolean":
            console.log("boolean!");
            break;
        case "bigint":
            console.log("bigint!");
            break;
        case "function":
            console.log("function!");
            break;
        case "object":
            if (arg == null) {
                console.log("null!");
            } else if (Array.isArray(arg)) {
                console.log("array!");
            } else console.log("object!");
            break;
        /*case "symbol":
            console.log("Symbol()!");
            break;*/
        default:
            console.log("I have no idea!");
            break;
    }

    // Your code to check for the argument's type/value goes here.
    // Bear in mind the special cases we talked about in the encounter. 🤔
    // The order of your if conditions might be important. 💡
}

// Test cases. Make all of them log the expected string.
logType(undefined);
logType(null);
logType(237);
logType(NaN);
logType("Hi");
logType(true);
logType(2n);
logType(function () {});
logType({});
logType([]);
logType(Symbol());
