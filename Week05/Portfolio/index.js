const fs = require("fs");
const path = require("path");
let filePath = path.join(__dirname, "/projects");
let folders = fs.readdirSync(filePath, { withFileTypes: true });
let html = "<!doctype html><h1>Portfolio</h1>";
let links = [];
for (let i = 0; i < folders.length; i++) {
    links[i] = [];
    links[i][0] = folders[i].name;
}
let i = 0;
logFiles(filePath);
function logFiles(p) {
    let items = fs.readdirSync(p, { withFileTypes: true });

    items.forEach(function (item) {
        if (item.isFile()) {
            filePath = path.join(p, item.name);

            if (path.extname(filePath) == ".html") {
                links[i][1] = `${links[i][0]}/${item.name}`;
                i++;
            }
        } else {
            logFiles(`${p}/${item.name}`);
        }
    });
}

for (let i = 0; i < fs.link.length; i++) {
    html += `<a href="${links[i][1]}">${links[i][0]}</a>\n`;
}

module.exports = html;
