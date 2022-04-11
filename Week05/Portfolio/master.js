const os = require("os");
const cpus = os.cpus();
const cluster = require("cluster");
console.log(cpus.length);

cluster.setupMaster({
    exec: __dirname + "/main.js",
});

for (let i = 0; i < cpus.length; i++) {
    cluster.fork();
    console.log("Launch new server");
}

cluster.on("exit", function (worker) {
    console.log(
        `Server Worker n.:${worker.process.pid} exit or fell off. \n Starting a new one`
    );
    cluster.fork();
});
