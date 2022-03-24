(function () {
    var menuIcon = document.getElementsByClassName("menuIcon");
    var wholeMenu = document.getElementsByClassName("hamburger-menu");
    var closeButton = document.getElementsByTagName("span");
    var closeClickOut = document.getElementById("darkLayer");
    var block = false;
    var pop = $("#pop");

    console.log(menuIcon);
    console.log(wholeMenu[0].classList);

    menuIcon[0].addEventListener("click", function () {
        wholeMenu[0].classList.add("on");
        wholeMenu[0].style.visibility = "visible";
        closeClickOut.style.visibility = "visible";
    });
    closeButton[0].addEventListener("click", function () {
        wholeMenu[0].classList.remove("on");
        wholeMenu[0].style.visibility = "hidden";
        closeClickOut.style.visibility = "hidden";
    });

    closeClickOut.addEventListener("click", function () {
        if (!block) {
            wholeMenu[0].classList.remove("on");
            wholeMenu[0].style.visibility = "hidden";
            closeClickOut.style.visibility = "hidden";
        }
    });

    setTimeout(function () {
        block = true;
        pop.css("visibility", "visible");
        closeClickOut.style.visibility = "visible";
        console.log(pop);
    }, 1000);

    $("#pop .close").on("click", function () {
        block = false;
        pop.css("visibility", "hidden");
        closeClickOut.style.visibility = "hidden";
    });
})();
