const http = require("http");
const chalk = require("chalk");
const querystring = require("querystring");
const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("request error", err));
    response.on("error", (err) => console.log("response error", err));

    //handling GET request
    if (request.method === "GET") {
        console.log("GET request Incoming");
        response.write(`<!doctype html>
        <html>
        <title>Colors</title>
        <form method="POST">
          <input type="text" name="text" placeholder="just input some text" autocomplete="off">
          <select name="color">
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="gray">gray</option>
            <option value="magenta">magenta</option>
            <option value="cyan">cyan</option>
          </select>
          <button type="submit">Go</button>
        </form>
        </html>`);
        //when response is done, END IT!
        response.end();
    }

    if (request.method === "POST") {
        console.log("POST Request Incoming");
        let body = "";
        request
            .on("data", (chunk) => {
                body += chunk;
            })
            .on("end", () => {
                //end of incoming data
                console.log(querystring.parse(body));
                response.setHeader("Content-Type", "text/html");
                response.statusCode = 200;
                response.write(
                    `<a href=""><p style="color:${
                        querystring.parse(body).color
                    }">${querystring.parse(body).text}</p></a>`
                );
                console.log(
                    chalk[querystring.parse(body).color](
                        querystring.parse(body).text
                    )
                );
                response.end();
            });
    }
});

server.listen(8080, () => {
    console.log("listening on port 8080");
});
