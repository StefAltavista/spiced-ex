(function () {
    var menuIcon = document.getElementsByClassName("menuIcon");
    var wholeMenu = document.getElementsByClassName("hamburger-menu");
    var closeButton = document.getElementsByTagName("span");
    var closeClickOut = document.getElementById("darkLayer");
    console.log(menuIcon);
    console.log(wholeMenu[0].classList);

    menuIcon[0].addEventListener("click", function () {
        wholeMenu[0].classList.add("on");
        wholeMenu[0].style.visibility = "visible";
    });
    closeButton[0].addEventListener("click", function (e) {
        wholeMenu[0].classList.remove("on");
        wholeMenu[0].style.visibility = "hidden";
    });

    wholeMenu[0].addEventListener("click", function (e) {
        wholeMenu[0].classList.remove("on");
        wholeMenu[0].style.visibility = "hidden";
        console.log("here");
        e.stopPropagation();
    });
})();
