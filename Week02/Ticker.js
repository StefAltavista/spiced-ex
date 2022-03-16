(function () {
    var albums = document.getElementById("albums");
    var links = albums.getElementsByTagName("A");

    console.log(albums);

    var left = albums.offsetLeft;
    console.log(left);

    function ticker() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left = left + links[0].offsetWidth;
            albums.appendChild(links[0]);
        }

        albums.style.left = left + "px";
        requestAnimationFrame(ticker);
    }
    ticker();
})();
