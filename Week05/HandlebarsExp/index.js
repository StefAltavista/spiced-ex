const express = require("express");
const app = express();
const projects = require("./projects.json");

//set up handlebars engine
const { engine } = require("express-handlebars");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
//

//get files from folders
app.use(express.static("./public"));
app.use(express.static("./projects"));

//server set-up

app.get("/", (req, res) => {
    res.render("home", {
        projects,
        title: "home",
        style: "style.css",
    });
});

app.get("/projects/:name", (req, res) => {
    const { name } = req.params;
    const foundProj = projects.find((x) => x.directory === name);
    res.render("project", {
        projects,
        foundProj,
        title: foundProj.name,
        style: "../projStyle.css",
    });
});
app.listen(3000, () => {
    console.log("listening to PORT 3000");
});
