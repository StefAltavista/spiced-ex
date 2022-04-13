const https = require("https");

function makeRequest({ method, host, path, headers, body }, callback) {
    const request = https.request(
        { method, host, path, headers },
        (response) => {
            let body = "";
            response.on("data", (chunk) => {
                body += chunk;
            });
            response.on("end", () => {
                try {
                    let parsedBody = JSON.parse(body);
                    callback(null, parsedBody);
                } catch (error) {
                    console.log("Error parsing body");
                    callback(error);
                }
            });
        }
    );

    request.on("error", (err) => {
        callback(err);
    });
    request.end(body);
}

const { Key, Secret } = require("./secret.json");

function getToken(callback) {
    const authHeader = Buffer.from(`${Key}:${Secret}`).toString("base64");

    makeRequest(
        {
            method: "POST",
            host: "api.twitter.com",
            path: "/oauth2/token",
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
                Authorization: `Basic ${authHeader}`,
            },
            body: "grant_type=client_credentials",
        },
        (error, data) => {
            if (error) {
                console.log("\nError:", error);
                callback(error);
                return;
            }
            callback(null, data.access_token);
        }
    );
}

function getTweet(screen_name, callback) {
    let token;

    getToken((err, data) => {
        if (err) {
            callback(err);
            return;
        }

        token = data;
        makeRequest(
            {
                method: "GET",
                host: "api.twitter.com",
                path: `/1.1/statuses/user_timeline.json?screen_name=${screen_name}&tweet_mode=extended&exclude_replies=true`,
                headers: { Authorization: `Bearer ${token}` },
            },
            (error, data) => {
                if (error) {
                    console.log("Error Retrieving Twitts:", error);
                    callback(error);
                    return;
                }
                //console.log("\nData:", data);
                callback(null, data);
            }
        );
    });
}

module.exports = getTweet;
