(function () {
    var box = document.getElementById("box");

    document.addEventListener("mouseover", function (e) {
        box.style.left = e.offsetX - 50 + "px";
        box.style.top = e.offsetY - 50 + "px";
    });
})();
