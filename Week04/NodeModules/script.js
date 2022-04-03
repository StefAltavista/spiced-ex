const url = require("url");
const query = require("querystring");

let link = url.parse(process.argv[2]);
let q = query.parse(link.query);
let arr = Object.keys(q);

console.log("The Protocol is", link.protocol);
console.log("The Host is", link.host);
console.log("The Host Name is", link.hostname);
console.log("The Port is", link.port);
console.log("The Path Name is", link.pathname);
console.log("The Query is", link.query);

for (let i = 0; i < arr.length; i++) {
    console.log("The value of", arr[i], "is", q[arr[i]]);
}
