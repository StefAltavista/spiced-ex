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
        console.log("call Module index.html");
        res.end();
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
            console.log("fs.stat err", err);
            return err404();
        }

        if (stats.isDirectory()) {
            if (!filePath.endsWith("/")) {
                console.log("is directory but misses / Path:", filePath);

                let nPath = path.join(req.url, "/");
                res.writeHead(302, { location: nPath });
                res.end();
            } else {
                console.log("is directory ends with /", filePath);

                filePath = path.join(filePath, "index.html");
                console.log("check for index at: ", filePath);
                fs.stat(filePath, (er) => {
                    if (!er) {
                        console.log("index.html FOUND!");
                        res.writeHead(200, { "content-type": "text/html" });
                        let stream = fs.createReadStream(filePath);

                        stream.on("error", (err) => {
                            console.log("NOFILE", err);
                            err404();
                        });
                        stream.pipe(res);
                    } else {
                        console.log("check for index at... error:", err);
                        err404();
                    }
                });
            }
        } else if (stats.isFile()) {
            console.log("is file");

            fs.stat(filePath, (er) => {
                let ext = path.extname(filePath);
                for (let i = 0; i < extensions.length; i++) {
                    if (ext == extensions[i][0]) {
                        content = extensions[i][1];
                        console.log(ext, content);
                    }
                }
                if (!er) {
                    res.writeHead(200, { "content-type": content });
                    let stream = fs.createReadStream(filePath);
                    stream.pipe(res);

                    stream.on("error", (err) => {
                        console.log("stream error:", err);
                        err404();
                    });
                } else if (er) {
                    console.log("is File fs stat error:", er);
                    err404();
                }
            });
        }
    });
}).listen(8080, () => {
    console.log("listening!");
});
