const express = require("express");
const app = express();
const getTweet = require("./getTweet.js");
const fs = require("fs");

let screen_name = "TheOnion";

app.get("/tweets.json", (request, response) => {
    getTweet(screen_name, (error, tweets) => {
        if (error) {
            console.log("Error:", error);
            response.writeHead(500, "Content-Type: application/json");
            response.end("{ERROR:500}");
            return;
        } else {
            response.json(filterTweets(tweets));
        }
    });
});

function filterTweets(tweets) {
    let obj = [];
    tweets.forEach((tweet, idx) => {
        let fullText = tweet.full_text;
        let text = fullText.split("http")[0].trim();
        obj[idx] = {};
        obj[idx].text = text;

        obj[idx].url = tweet.entities.urls[0].expanded_url;

        console.log(obj[idx]);
    });

    return obj;
}

app.listen(3000, () => {
    console.log("Listening to port 3000");
});
