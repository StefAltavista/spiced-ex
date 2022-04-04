let fs = require("fs");
const { isDate } = require("util/types");
let chalk = require("/Users/Stef/Spiced Academy/aspartame-code/Week04/NodeAdventure/node_modules/chalk");
let path = `${__dirname}/files`;

logSizes(path);
function logSizes(path) {
    let items = fs.readdirSync(path, { withFileTypes: true });

    items.forEach(function (item) {
        if (item.isFile()) {
            let size = fs.statSync(path).size;
            console.log(
                path,
                chalk.red.bold(item.name),
                size,
                chalk.yellow("bytes")
            );
        } else {
            logSizes(`${path}/${item.name}`);
        }
    });
}

let map = {};
mapSizes(path, map);

function mapSizes(path, obj) {
    let items = fs.readdirSync(path, { withFileTypes: true });

    items.forEach(function (item) {
        if (item.isFile()) {
            let size = fs.statSync(path).size;
            obj[item.name] = size;
        } else {
            obj[item.name] = {};
            mapSizes(`${path}/${item.name}`, obj[item.name]);
        }
    });
}
console.log(JSON.stringify(map, null, 4));
fs.writeFileSync(`${__dirname}/map.json`, JSON.stringify(map, null, 4));
