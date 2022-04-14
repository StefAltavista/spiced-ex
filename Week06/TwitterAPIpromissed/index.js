const express = require("express");
const app = express();
const getTweet = require("./getTweet.js");

let screen_name = "LucaTomarelli";

app.get("/tweets.json", (request, response) => {
    getTweet(screen_name).then((tweets) => {
        response.json(filterTweets(tweets));
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
