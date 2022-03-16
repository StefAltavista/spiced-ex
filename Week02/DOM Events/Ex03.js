(function () {
    var box = document.getElementById("box");

    function rndmcolor() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var col = "rgb(" + r + ", " + g + ", " + b + ")";
        return col;
    }
    box.addEventListener("mousedown", function () {
        box.style.backgroundColor = rndmcolor();
    });
    box.addEventListener("mouseup", function () {
        box.style.backgroundColor = rndmcolor();
    });
})();
