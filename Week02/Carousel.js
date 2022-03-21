(function () {
    var carousel = document.getElementsByClassName("carousel");
    var cats = document.getElementsByTagName("img");
    var dots = document.getElementsByClassName("dot");

    var i = 0;
    var transitioning = false;
    var timeoutId;

    timeoutId = setTimeout(scroll, 3000);

    carousel[0].addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("offscreen")) {
            e.target.classList.remove("offscreen");
            transitioning = false;
        }
    });

    function scroll(idx) {
        transitioning = true;
        cats[i].classList.remove("onscreen");
        cats[i].classList.add("offscreen");
        dots[i].classList.remove("on");

        i++;

        if (i === cats.length) {
            i = 0;
        }

        if (idx != undefined) {
            i = idx;
        }

        cats[i].classList.add("onscreen");
        dots[i].classList.add("on");

        timeoutId = setTimeout(scroll, 3000);
    }

    Array.prototype.slice.call(dots).forEach(function (dot, index) {
        dot.addEventListener("click", function () {
            if (transitioning == true || index == i) {
                return;
            } else {
                clearTimeout(timeoutId);
                scroll(index);
            }
        });
    });
})();
