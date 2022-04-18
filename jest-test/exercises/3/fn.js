module.exports = function fn(str) {
    if (typeof str != "string" && !Array.isArray(str)) {
        return null;
    }

    let arr = [];
    if (Array.isArray(str)) {
        str.map((x) => {
            typeof x == "string"
                ? arr.push(x.split("").reverse().join(""))
                : arr.push(null);
        });
        console.log(arr);
        return arr;
    }

    return str.split("").reverse().join("");
};
