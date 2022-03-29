(function () {
    var inp = $("input");
    var results = $("#results");
    var r = "";
    var choice = false;
    var t;

    inp.on("input", function () {
        var val = inp.val();
        clearTimeout(t);
        t = setTimeout(function () {
            $.ajax({
                url: "https://spicedworld.herokuapp.com/",
                data: {
                    q: val,
                },
                success: function (matches) {
                    if (val == inp.val()) {
                        ok();
                    }
                    function ok() {
                        matches = matches.slice(0, 4);
                        incrementalSearch(matches);
                    }
                    t = 0;
                },
            });
        }, 250);
    });

    function incrementalSearch(matches) {
        /* inp.on("input", function () {
            var val = inp.val();
            choice = false;
        
           
        
            var matches = [];
            for (var i = 0; i < countries.length; i++) {
                if (countries[i].toLowerCase().startsWith(val.toLowerCase())) {
                    matches.push(countries[i]);
                }
                if (matches.length == 4) {
                    break;
                }
            }*/
        if (matches == 0) {
            results.html("NO RESULT");
            return;
        }
        var result = "";
        if (!choice) {
            if (matches.length > 0) {
                for (var a = 0; a < matches.length; a++) {
                    result += "<p>" + matches[a] + "</p>";
                }
                results.html(result);
                r = result;
            } else if (matches.length == 0) {
                results.html("no result");
                r = "no result";
            }
        }
        results
            .on("mouseover", "p", function (e) {
                e.target.classList.add("highlight");
            })
            .on("mouseout", "p", function (e) {
                e.target.classList.remove("highlight");
            })
            .on("mousedown", "p", function (e) {
                inp.val(e.target.innerHTML);
                results.html("");
                choice = true;
            });

        inp.on("keydown", function (e) {
            if (e.code == "ArrowDown") {
                if ($("#results p").hasClass("highlight")) {
                    $("#results p.highlight").next().addClass("highlight");
                    $("#results p.highlight").prev().removeClass("highlight");
                } else $("#results p:nth-child(1)").addClass("highlight");
            }
            if (e.code == "ArrowUp") {
                if (e.code == "ArrowUp") {
                    $("p.highlight").prev().addClass("highlight");
                    $("p.highlight").next().removeClass("highlight");
                }
                console.log(e.target, e.code);
            }
            if (e.code == "Backspace") {
                choice = false;
                results.html(r);
            }
            if (e.code == "Enter") {
                choice = true;
                inp.val($("p.highlight").html());
                results.html("");
            }
        })
            .on("blur", function () {
                results.html("");
                return;
            })
            .on("focus", function () {
                if (!choice) {
                    results.html(r);
                }

                return;
            });
    }
})();

/*
inp.on("input", function () {
    var val = inp.val();
    choice = false;

    if (!val) {
        results.html("");
        return;
    }

    var matches = [];
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].toLowerCase().startsWith(val.toLowerCase())) {
            matches.push(countries[i]);
        }
        if (matches.length == 4) {
            break;
        }
    }

    var result = "";
    if (!choice) {
        if (matches.length > 0) {
            for (var a = 0; a < matches.length; a++) {
                result += "<p>" + matches[a] + "</p>";
            }
            results.html(result);
            r = result;
        } else if (matches.length == 0) {
            results.html("no result");
            r = "no result";
        }
    }
    results
        .on("mouseover", "p", function (e) {
            e.target.classList.add("highlight");
        })
        .on("mouseout", "p", function (e) {
            e.target.classList.remove("highlight");
        })
        .on("mousedown", "p", function (e) {
            inp.val(e.target.innerHTML);
            results.html("");
            choice = true;
        });
});
*/
