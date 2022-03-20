(function () {
    var carousel = document.getElementsByClassName("carousel");
    var cats = document.getElementsByTagName("img");

    var i = 0;
    scroll();
    carousel[0].addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("offscreen")) {
            e.target.classList.remove("offscreen");
        }
    });

    function scroll() {
        setTimeout(function () {
            cats[i].classList.remove("onscreen");
            cats[i].classList.add("offscreen");
            i++;

            if (i === cats.length) {
                i = 0;
            }
            cats[i].classList.add("onscreen");

            scroll();
        }, 5000);
    }
})();
