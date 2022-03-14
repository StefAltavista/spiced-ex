function invertCase(str) {
    if (typeof str != "string") {
        return console.log("Wrong input");
    }
    console.log("Original String:", str);
    var newStr = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr.push(str[i].toLowerCase());
        }
        if (str[i] === str[i].toLowerCase()) {
            newStr.push(str[i].toUpperCase());
        }
    }

    return console.log("Inverted String:", newStr.join(""));
}

var string = "ChAngEme";

invertCase(string);
