//code
function fn(b, a) {}

function each(data, fn) {
    if (typeof data != "object") {
        return console.log("ERROR");
    }
    if (Array.isArray(data)) {
        data.forEach((element, index) => fn(index, element));
    }
    if (!Array.isArray(data)) {
        for (var k in data) {
            fn(data[k], k);
        }
    }
}

//Test
each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function (val, idx) {
    console.log("The value of index " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'
