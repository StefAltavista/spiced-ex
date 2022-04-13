const express = require("express");
const app = express();
const getTweet = require("./getTweet.js");
const fs = require("fs");

let screen_name = "TheOnion";

function formatTweets(tweets) {
    return tweets;
}

app.get("/tweets.json", (request, response) => {
    getTweet(screen_name, (error, tweets) => {
        if (error) {
            console.log("Error:", error);
            response.writeHead(500, "Content-Type: application/json");
            response.end("{ERROR:500}");
            return;
        }

        response.json(tweets);
    });
});
function write(tweets) {
    fs.writeFile("tweets.json", tweets, null, (error) => {
        return error;
    });
}

app.listen(3000, () => {
    console.log("Listening to port 3000");
});

// console.log(tweets);
// fs.writeFileSync("tweets.json", getTweets, (err) => {
//     if (err) {
//         console.log("error writing tweets in file ", err);
//         return;
//     }
// });
