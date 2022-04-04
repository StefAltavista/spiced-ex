let fs = require("fs");
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
                chalk.red(item.name),
                size,
                chalk.yellow("bytes")
            );
        } else {
            logSizes(`${path}/${item.name}`);
        }
    });
}
