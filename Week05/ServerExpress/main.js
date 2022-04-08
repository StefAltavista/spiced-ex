const express = require("express");
const app = express();
const path = require("path");
const auth = require("auth");
let accepted;

app.use(express.urlencoded({ extended: false }));
app.use(require("cookie-parser")());

app.get("/cookies.html", (req, res) => {
    console.log("cookies", req.cookies);
    res.sendFile(`${__dirname}/cookies.html`);
});
app.post("/cookies.html", (req, res) => {
    accepted = req.body;
    let permission = accepted.permission;
    permission
        ? res.cookie("cookies", "accepted")
        : res.send("<h1>OK, come back if you change your mind<h1/>");
    console.log("cookies", accepted);

    res.redirect(req.url);
});

app.get("*", (req, res, next) => {
    !req.cookies.cookies ? res.redirect("/cookies.html") : next();
});

app.use(express.static(`${__dirname}/projects`));

app.listen(8080, () => console.log(`\nListening on 8080...\n`));
