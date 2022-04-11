const os = require("os");
const cpus = os.cpus();

const cluster = require("cluster");
console.log(cpus.length);

cluster.setupMaster({
    exec: __dirname + "/app.js",
});

for (let i = 0; i < cpus; i++) {
    cluster.fork();
}

cluster.on("exit", function (worker) {
    console.log(
        `Server Worker n.:${worker.process.pid} exit or fell off. \n Starting a new one`
    );
    cluster.fork();
});
