/* eslint-disable indent */
const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
    request.on("error", (err) => {
        console.log(err, err.stack);
    });
    const { method, url, headers } = request;
    console.log("URL:", url, "\nMethod:", method, "\nHeaders:", headers);

    let reqData =
        "\n\nNEW REQUEST:" +
        "\nDate: " +
        Date() +
        "\nMethod: " +
        method +
        "\nURL: " +
        url +
        "\nUser-Agent: " +
        headers["user-agent"];

    fs.appendFile("requests.txt", reqData, (err) => {
        if (err) throw err;
        console.log("The data was added to requests.txt");
    });

    switch (method) {
        case "GET":
            if (url === "/requests.txt") {
                fs.createReadStream("./requests.txt").pipe(response);
                response.writeHead(200, { "Content-Type": "text/plain" });
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                let body =
                    "<!doctype html><html><title>Hello World!:</title><p>Hello World</p></html>";
                //response.write(body);
                response.end(body);
            }
            break;
        case "HEAD":
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end();
            break;
        case "POST":
            console.log(request.body);
            response.writeHead(302, { location: "/" });
            response.end();
            break;
        default:
            response.statusCode = 302;
            response.end();
    }

    response.on("error", (err) => {
        console.log(err, err.stack);
    });
}).listen(8080, () => {
    console.log("Listening port 8080!");
});
