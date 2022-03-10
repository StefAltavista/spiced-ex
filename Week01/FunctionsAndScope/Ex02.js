//setTimeout(function () {
//    console.log("hello");
//}, 1000);

function waitThenRun(fn) {
    setTimeout(fn, 1500);
}

waitThenRun(function () {
    console.log("Hello!");

    waitThenRun(function () {
        console.log("Goodbye!");

        waitThenRun(function () {
            console.log("End!");
        });
    });
});
