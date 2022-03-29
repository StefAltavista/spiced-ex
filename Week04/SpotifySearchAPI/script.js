(function () {
    console.log("sanity check");
    var input = $(".input");
    var type = $(".type");
    var searchButton = $("#searchButton");
    var inp;
    var results = $(".results");

    input.on("input", function () {
        inp = input.val();
    });

    searchButton.on("click", function () {
        search(inp);
    });

    function search(inp) {
        console.log(inp);
        console.log(type.val());
        console.log("launch search");

        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                q: inp,
                type: type.val(),
            },
            success: function (res) {
                res = res.artists || res.albums;
                var nextURL = res.next.replace(
                    "api.spotify.com/v1/search",
                    "spicedify.herokuapp.com/spotify"
                );
                var arr = res.items;
                for (var i = 0; i < arr.length; i++) {
                    var r =
                        '<div class="res"><a href=' +
                        res.items[i].external_urls.spotify +
                        "><img src=" +
                        res.items[i].images[0].url +
                        " alt=" +
                        '"img"/></a>' +
                        res.items[i].name +
                        "</div>";

                    results.append(r);
                }
                console.log(nextURL);
            },
        });
    }
})();
