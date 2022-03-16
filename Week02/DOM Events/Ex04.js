(function () {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");

    function rndmcolor() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var col = "rgb(" + r + ", " + g + ", " + b + ")";
        return col;
    }

    box1.addEventListener("mousedown", function (e) {
        box1.style.backgroundColor = rndmcolor();
    });
    box1.addEventListener("mouseup", function (e) {
        box1.style.backgroundColor = rndmcolor();
    });

    box2.addEventListener("mousedown", function (e) {
        box2.style.backgroundColor = rndmcolor();
        e.stopPropagation();
    });
    box2.addEventListener("mouseup", function (e) {
        box2.style.backgroundColor = rndmcolor();
        e.stopPropagation();
    });
})();
