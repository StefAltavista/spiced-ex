(function () {
    var albums = document.getElementById("albums");
    var links = albums.getElementsByTagName("A");
    var animationID;
    console.log(albums);

    var left = albums.offsetLeft;
    console.log(left);

    function ticker() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left = 0;
            albums.appendChild(links[0]);
        }

        albums.style.left = left + "px";
        animationID = requestAnimationFrame(ticker);
    }
    ticker();

    for (var i = 0; i < links.length; i++) {
        console.log(links[i]);

        links[i].addEventListener("mouseenter", function (e) {
            console.log(e.target);
            cancelAnimationFrame(animationID);
        });

        links[i].addEventListener("mouseleave", function (e) {
            ticker();
            console.log(e.target);
        });
    }
})();
