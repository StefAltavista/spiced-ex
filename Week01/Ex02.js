var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var p in a) {
    b[a[p]] = p;
}

console.log(a);
console.log(b);
