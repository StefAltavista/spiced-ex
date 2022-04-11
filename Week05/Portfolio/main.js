const indexPageGenerator = require("./index.js");

const http = require("http");
const path = require("path");
const fs = require("fs");

const extensions = [
    [".html", "text/html"],
    [".css", "text/css"],
    [".js", "text/javascript"],
    [".json", "application/json"],
    [".gif", "image/gif"],
    [".jpg", "image/jpg"],
    [".png", "image/png"],
    [".svg", "image/svg+xml"],
];
let content;

http.createServer((req, res) => {
    let err404 = () => {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>File Not found</h1><h2>error code: 404</h2>");
        return;
    };
    //check that method is GET
    if (req.method != "GET") {
        res.writeHead(405, { "content-type": "text/html" });
        res.end("<h1>Wrong Request</h1><h2>error code: 405</h2>");
        return;
    }

    if (req.url == `/`) {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(indexPageGenerator);
        return;
    }

    //create path from URL
    let filePath = path.join(__dirname, "projects", req.url);

    //check for anomalous user behaviour
    if (!filePath.startsWith(path.join(__dirname, "projects"))) {
        res.statusCode = 403;
        res.end("NOT ALLOWED");
        return;
    }

    fs.stat(filePath, function (err, stats) {
        if (err) {
            return err404();
        }

        if (stats.isDirectory()) {
            if (!filePath.endsWith("/")) {
                let nPath = path.join(req.url, "/");
                res.writeHead(302, { location: nPath });
                res.end();
            } else {
                filePath = path.join(filePath, "index.html");
                fs.stat(filePath, (er) => {
                    if (!er) {
                        res.writeHead(200, { "content-type": "text/html" });
                        let stream = fs.createReadStream(filePath);

                        stream.on("error", (err) => {
                            console.log("NOFILE", err);
                            err404();
                        });
                        stream.pipe(res);
                    } else {
                        err404();
                    }
                });
            }
        } else if (stats.isFile()) {
            fs.stat(filePath, (er) => {
                let ext = path.extname(filePath);
                for (let i = 0; i < extensions.length; i++) {
                    if (ext == extensions[i][0]) {
                        content = extensions[i][1];
                    }
                }
                if (!er) {
                    res.writeHead(200, { "content-type": content });
                    let stream = fs.createReadStream(filePath);
                    stream.pipe(res);

                    stream.on("error", (err) => {
                        err404(err);
                    });
                } else if (er) {
                    err404();
                }
            });
        }
    });
}).listen(8080, () => {
    console.log("Listening port 8080");
});
