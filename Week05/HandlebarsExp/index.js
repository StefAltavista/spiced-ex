const express = require("express");
const app = express();
const projects = require("./projects.json");

//set up handlebars engine
const { engine } = require("express-handlebars");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
//
app.use(express.static("./public"));
app.use(express.static("./projects"));
app.get("/", (req, res) => {
    res.render("home", {
        projects,
        title: "home",
        style: "style.css",
    });
});
app.listen(3000, () => {
    console.log("listening to PORT 3000");
});
