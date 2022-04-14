const https = require("https");
const { Key, Secret } = require("./secret.json");

const makeRequest = function ({ method, host, path, headers, body }) {
    return new Promise((result, reject) => {
        let dataBody = "";
        const request = https.request(
            { method, host, path, headers },
            (res) => {
                res.on("data", (chunk) => {
                    dataBody += chunk;
                });
                res.on("end", () => {
                    try {
                        dataBody = JSON.parse(dataBody);
                    } catch (error) {
                        console.log("Error parsirequest.end(error");
                        reject(error);
                    }
                    result(dataBody);
                });
                res.on("error", (e) => console.log(e));
            }
        );

        request.on("error", (error) => {
            reject(error);
        });

        request.end(body);
    });
};

const getToken = function () {
    const authHeader = Buffer.from(`${Key}:${Secret}`).toString("base64");
    return new Promise((result, reject) => {
        makeRequest({
            method: "POST",
            host: "api.twitter.com",
            path: "/oauth2/token",
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
                Authorization: `Basic ${authHeader}`,
            },
            body: "grant_type=client_credentials",
        })
            .then((token) => {
                result(token);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const getTweet = function (screen_name) {
    return new Promise((result, reject) => {
        getToken()
            .then((token) => {
                makeRequest({
                    method: "GET",
                    host: "api.twitter.com",
                    path: `/1.1/statuses/user_timeline.json?screen_name=${screen_name}&tweet_mode=extended&exclude_replies=true`,
                    headers: { Authorization: `Bearer ${token.access_token}` },
                })
                    .then((tweet) => {
                        console.log("ok:", tweet);
                        result(tweet);
                    })
                    .catch((error) => reject(error));
            })
            .catch((error) => reject(error));
    });
};

module.exports = getTweet;
// getTweet("TheOnion")
//     .then((tweet) => console.log("Tweet: ", tweet))
//     .catch((e) => console.log("Error: ", e));
