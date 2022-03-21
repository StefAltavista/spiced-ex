(function () {
    var carousel = document.getElementsByClassName("carousel");
    var cats = document.getElementsByTagName("figure");
    var toLeft = document.getElementById("left");
    var toRight = document.getElementById("right");

    var i = 0;
    var control = true;
    var timeoutId;
    left();
    toLeft.addEventListener("click", function () {
        if (control == false) {
            control = true;
            left();
        }
    });
    toRight.addEventListener("click", function () {
        if (control == true) {
            control = false;
            right();
        }
    });

    carousel[0].addEventListener("transitionend", function (e) {
        if (control == false) {
            if (e.target.classList.contains("toright")) {
                e.target.style.transition = "0s";
                e.target.classList.remove("toright");
                e.target.classList.remove("onscreen");
                e.target.classList.add("offscreen");
            }
        }
        if (control == true) {
            if (e.target.classList.contains("offscreen")) {
                e.target.style.transition = "0s";
                e.target.classList.remove("offscreen");
                e.target.classList.remove("onscreen");
                e.target.classList.add("toright");
            }
        }
    });

    function right() {
        console.log("start right, control=", control);
        for (var every = 0; every < cats.length; every++) {
            cats[every].style.transition = "0s";
            cats[every].classList.remove("toright");
            cats[every].classList.remove("onscreen");
            cats[every].classList.add("offscreen");
        }

        cats[i].classList.remove("offscreen");
        cats[i].classList.add("onscreen");
        cats[i].style.transition = "1s";

        scrollR();

        function scrollR() {
            timeoutId = setTimeout(function () {
                if (control == true) {
                    console.log("end right");
                    return;
                }
                cats[i].classList.remove("onscreen");
                cats[i].classList.remove("offscreen");
                cats[i].classList.add("toright");

                i++;

                if (i === cats.length) {
                    i = 0;
                }
                cats[i].style.transition = "1s";
                cats[i].classList.remove("offscreen");
                cats[i].classList.remove("toright");
                cats[i].classList.add("onscreen");

                scrollR();
            }, 2000);
        }
    }

    function left() {
        console.log("start left, control", control);

        for (var every = 0; every < cats.length; every++) {
            cats[every].style.transition = "0s";
            cats[every].classList.remove("offscreen");
            cats[every].classList.remove("onscreen");
            cats[every].classList.add("toright");
        }

        cats[i].classList.remove("toright");
        cats[i].classList.add("onscreen");
        cats[i].style.transition = "1s";

        scrollL();

        function scrollL() {
            timeoutId = setTimeout(function () {
                if (control == false) {
                    console.log("end left");
                    return;
                }
                cats[i].classList.remove("onscreen");
                cats[i].classList.remove("toright");
                cats[i].classList.add("offscreen");
                i++;
                if (i === cats.length) {
                    i = 0;
                }
                cats[i].style.transition = "1s";
                cats[i].classList.remove("toright");
                cats[i].classList.remove("offscreen");
                cats[i].classList.add("onscreen");

                scrollL();
            }, 2000);
        }
    }
})();
