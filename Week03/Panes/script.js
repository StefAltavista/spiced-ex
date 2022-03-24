(function () {
    var page = $(document);
    var container = $(".container");
    var cut = $(".container .cut");
    var slider = $("#slider");
    var on = false;

    slider.on("mousedown", function () {
        on = true;
    });
    page.on("mouseup", function () {
        on = false;
    });

    container.on("mousemove", function (e) {
        var px = e.clientX - container.offset().left;
        console.log(px);
        if (px + 10 > container.outerWidth()) {
            px = container.outerWidth() - 10;
        }

        if (on) {
            slider.css("left", px);
            cut.css("clip-path", "inset(0 0 0 " + px + "px)");
        }
    });
})();
