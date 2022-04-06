(function () {
    var searchButton = $("#searchButton");
    var go;
    var nextURL;
    var currImgUrl;
    var results = $(".results");

    //var infScroll = location.search.search(/\bscroll=infinite\b/) > -1;

    var infScroll = $("#infiniteScrol");
    var defaultImgUrl =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
    var moreButton =
        '<button type="button" id="moreButton">More</button></div>';

    searchButton.on("click", function () {
        var url = "https://spicedify.herokuapp.com/spotify";
        var data = {
            q: $(".input").val(),
            type: $(".type").val(),
        };
        search(url, data);
        go = true;
    });

    function search(url, data) {
        $.ajax({
            url: url,
            data: data,
            success: function (res) {
                res = res.artists || res.albums;

                res.next
                    ? (nextURL = res.next.replace(
                          "api.spotify.com/v1/search",
                          "spicedify.herokuapp.com/spotify"
                      ))
                    : (nextURL = undefined);

                var arr = res.items;
                createHtml(arr, nextURL);
            },
        });
    }

    function createHtml(arr, nextURL) {
        var r = "";

        for (var i = 0; i < arr.length; i++) {
            !arr[i].images[0]
                ? (currImgUrl = defaultImgUrl)
                : (currImgUrl = arr[i].images[0].url);

            r =
                r +
                '<div class="res"><a href=' +
                arr[i].external_urls.spotify +
                "><img src=" +
                currImgUrl +
                " alt=" +
                '"img"/></a>' +
                arr[i].name +
                "</div>";
        }
        !go ? $("#moreButton").remove() : console.log("keep Searching!");
        results[go ? "html" : "append"](r);

        if (nextURL) {
            if (infScroll.val() == "Yes") {
                checkScrollPosition();
            } else {
                results.append(moreButton);
                $("#moreButton").on("click", function () {
                    go = false;
                    search(nextURL);
                });
            }
        }
    }

    function checkScrollPosition() {
        setTimeout(function () {
            var docH = $(document).height();
            var winH = $(window).height();
            var scrT = $(document).scrollTop();
            console.log(docH, winH, scrT);

            if (winH + scrT > docH - 1500) {
                go = false;
                search(nextURL);
            } else checkScrollPosition();
        }, 600);
    }
})();
