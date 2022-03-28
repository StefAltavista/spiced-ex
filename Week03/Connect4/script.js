/* eslint-disable indent */
(function () {
    var machine1_ON = $("#plType1");
    var machine2_ON = $("#plType2");
    var board = $("#board");
    var matrix = [];
    var diag1 = [];
    var diag2 = [];
    var n = 0;
    var turn = 1;
    var x, y;
    var xx, yy;
    var column = "";
    var coin = turns();
    var oldCoin;
    var verify = "";
    var gameover = false;
    var h;
    var color1 = $("#clr1");
    var color2 = $("#clr2");
    var pickColor1 = "#a6ff00";
    var pickColor2 = "#ff8800";
    var style = $("style");
    var zeroGrav = $("#zeroGrav");
    var coin0 = $("#coin");
    var container = $("#container");
    var pix;

    //ZeroGravity Check
    if (localStorage.getItem("zeroGravity") != undefined) {
        var getGrav = localStorage.getItem("zeroGravity");
        var zeroGravity = getGrav;
        if (zeroGravity == "true") {
            zeroGrav.addClass("on");
        }
    }
    //color change
    color1.on("input", function (e) {
        pickColor1 = e.target.value;

        var string =
            ".coin1{background-color:" +
            pickColor1 +
            ";}.coin2 {background-color: " +
            pickColor2 +
            ";}";
        style.html(string);
    });
    color2.on("input", function (e) {
        pickColor2 = e.target.value;

        var string =
            ".coin1{background-color:" +
            pickColor1 +
            ";}.coin2 {background-color: " +
            pickColor2 +
            ";}";
        style.html(string);
    });
    //turn function
    function turns() {
        if (turn % 2 > 0) {
            turn++;
            if (machine1_ON.val() == 1) {
                setTimeout(function () {
                    machine2();
                }, 500);
            }
            return "coin1";
        }

        if (turn % 2 == 0) {
            turn++;
            if (machine2_ON.val() == 1) {
                setTimeout(function () {
                    machine2();
                }, 500);
            }
            return "coin2";
        }
    }
    //create js matrix
    for (x = 0; x < 6; x++) {
        matrix[x] = [];
        for (y = 0; y < 7; y++) {
            var slotString = ".slot:nth(";
            slotString += n;
            slotString += ")";
            var element = '<div class="slot"></div>';
            board.append(element);
            matrix[x][y] = $(slotString);
            n++;
        }
    }
    //define columns
    for (y = 6; y >= 0; y--) {
        for (x = 5; x >= 0; x--) {
            column = "col" + y;
            matrix[x][y].addClass(column);
        }
    }
    //activate ZeroGravity
    zeroGrav.on("click", function () {
        switch (zeroGravity) {
            case "false":
                zeroGravity = "true";
                zeroGrav.addClass("on");
                location.reload();
                break;
            case "true":
                zeroGravity = "false";
                zeroGrav.removeClass("on");
                location.reload();
                break;
        }
        localStorage.setItem("zeroGravity", zeroGravity);
    });

    //add coin ZeroGravity
    for (x = 5; x >= 0; x--) {
        for (y = 6; y >= 0; y--) {
            if (zeroGravity == "true") {
                matrix[x][y].on("click", function (e) {
                    if (!gameover) {
                        if (
                            $(e.target).hasClass("coin1") ||
                            $(e.target).hasClass("coin2")
                        ) {
                            y--;
                        } else $(e.target).addClass(coin);
                    }
                    verticalCheck(coin);
                    orizontalCheck(coin);
                    diagonal1Check(coin);
                    diagonal2Check(coin);
                    oldCoin = coin;
                    coin0.removeClass(coin);
                    coin = turns();

                    coin0.addClass(coin);
                });
            }
        }
    }

    //add coin Normal Gravity
    for (y = 6; y >= 0; y--) {
        for (x = 5; x >= 0; x--) {
            if (zeroGravity == "false") {
                matrix[x][y].on("click", function (e) {
                    for (y = 6; y >= 0; y--) {
                        for (x = 5; x >= 0; x--) {
                            column = "col" + y;
                            if ($(e.target).hasClass(column)) {
                                for (var c = 5; c >= 0; c--) {
                                    if (gameover) {
                                        break;
                                    }
                                    if (
                                        !$(matrix[c][y]).hasClass("coin1") &&
                                        !$(matrix[c][y]).hasClass("coin2")
                                    ) {
                                        xx = c;
                                        yy = y;
                                        h = 70 + 70 * c;
                                        x = 0;

                                        break;
                                    }
                                }
                            }
                        }
                    }

                    if (!gameover) {
                        setTimeout(function () {
                            $(matrix[xx][yy]).addClass(coin);
                            verticalCheck(coin);
                            orizontalCheck(coin);
                            diagonal1Check(coin);
                            diagonal2Check(coin);
                            oldCoin = coin;
                            coin = turns();
                        }, 500);
                    }
                });
            }
        }
    }
    //orizontal check
    function orizontalCheck(coinC) {
        for (x = 0; x < 6; x++) {
            verify = "";
            for (y = 0; y < 7; y++) {
                if ($(matrix[x][y]).hasClass(coinC)) {
                    verify += "w";
                } else verify += "l";
                if (verify.includes("wwww")) {
                    var ver = verify.split("");
                    var f = x;
                    var i = 0;
                    callback();
                    function callback() {
                        setTimeout(function () {
                            if (ver[i] == "w") {
                                console.log("w", i);

                                matrix[f][i].addClass("winning");
                            }

                            i++;
                            if (i < ver.length) {
                                callback();
                            }
                        }, 250);
                    }

                    victory(coinC);
                    break;
                }
            }
        }

        return;
    }
    //vertical check
    function verticalCheck(coinC) {
        for (y = 0; y < 7; y++) {
            verify = "";
            for (x = 0; x < 6; x++) {
                if ($(matrix[x][y]).hasClass(coinC)) {
                    verify += "w";
                } else verify += "l";
                if (verify.includes("wwww")) {
                    var ver = verify.split("");
                    var f = y;
                    var i = 0;
                    callback();
                    function callback() {
                        setTimeout(function () {
                            if (ver[i] == "w") {
                                console.log("w", i);
                                matrix[i][f].addClass("winning");
                            }

                            i++;
                            if (i < ver.length) {
                                callback();
                            }
                        }, 250);
                    }
                    victory(coinC);
                    break;
                }
            }
        }

        return;
    }

    //diagonal right check
    function diagonal1Check(coinC) {
        var a = 0;
        for (x = 8; x >= 0; x--) {
            verify = "";

            var d = x - 3;

            if (d < 0) {
                d = 0;
                a++;
            }

            for (y = a; y < 7; y++) {
                try {
                    var check = matrix[d][y];
                } catch (err) {
                    break;
                }

                if ($(matrix[d][y]).hasClass(coinC)) {
                    verify += "w";
                    diag1[verify.length - 1] = [d, y];
                } else {
                    verify += "l";
                }

                if (verify.includes("wwww")) {
                    var ver = verify.split("");
                    var f;
                    var j;
                    var i = 0;
                    callback();
                    function callback() {
                        setTimeout(function () {
                            if (ver[i] == "w") {
                                f = diag1[i][0];
                                j = diag1[i][1];
                                matrix[f][j].addClass("winning");
                            }

                            i++;
                            if (i < ver.length) {
                                callback();
                            }
                        }, 250);
                    }
                    victory(coinC);
                    break;
                }

                d++;
            }
        }

        return;
    }

    //diagonal left check
    function diagonal2Check(coinC) {
        var a = 6;
        for (var b = 8; b > 0; b--) {
            verify = "";

            x = b - 6;
            if (x < 0) {
                x = 0;
                a--;
            }

            for (y = a; y >= 0; y--) {
                try {
                    var check = matrix[x][y];
                } catch (err) {
                    break;
                }

                if (matrix[x][y].hasClass(coinC)) {
                    verify += "w";
                    diag2[verify.length - 1] = [x, y];
                } else {
                    verify += "l";
                }
                if (verify.includes("wwww")) {
                    var ver = verify.split("");
                    var f;
                    var j;
                    var i = 0;
                    callback();
                    function callback() {
                        setTimeout(function () {
                            if (ver[i] == "w") {
                                f = diag2[i][0];
                                j = diag2[i][1];
                                matrix[f][j].addClass("winning");
                            }

                            i++;
                            if (i < ver.length) {
                                callback();
                            }
                        }, 250);
                    }
                    victory(coinC);
                    break;
                }
                x++;
            }
        }
        return;
    }

    //victory
    function victory(player) {
        gameover = true;
        $("#victory").addClass(player);
        $("#victory").removeClass("invisible");

        if (player == "coin1") {
            $("#victory").html("Player 1 Wins");
            return;
        }
        if (player == "coin2") {
            $("#victory").html("Player 2 Wins");
            return;
        }
    }

    //Mouse game
    container
        .on("mousemove", function (e) {
            var px = e.clientX - container.offset().left - 35;

            if (px >= 420) {
                px = 420;
            }
            if (px < 0) {
                px = 0;
            }

            coin0.css("left", px);

            pix = px;
            column = "col" + Math.round(pix / 70);

            if (zeroGravity == "true") {
                var tx = e.clientY - 155;

                if (tx > 440) {
                    tx = 440;
                }
                if (tx < 0) {
                    tx = 0;
                }
                coin0.css("top", tx);
            }
        })
        .on("click", function () {
            if (!gameover) {
                coin0.css("top", h);
                coin0.addClass("invisible");

                setTimeout(function () {
                    coin0.css("top", 0);
                    coin0.removeClass(oldCoin);

                    coin0.addClass(coin);
                    setTimeout(function () {
                        coin0.removeClass("invisible");
                    }, 500);
                }, 500);
            }
        });

    //Keyboard Game
    $(document).on("keydown", function (e) {
        if (e.code == "ArrowLeft") {
            if (pix % 70 != 0) {
                pix = Math.round(pix / 70) * 70;
            }
            pix = pix - 70;
            if (pix >= 420) {
                pix = 420;
            }
            if (pix < 0) {
                pix = 0;
            }
            column = "col" + Math.round(pix / 70);
            coin0.css("left", pix);
        }
        if (e.code == "ArrowRight") {
            if (pix % 70 != 0) {
                pix = Math.round(pix / 70) * 70;
            }

            pix = pix + 70;

            if (pix >= 420) {
                pix = 420;
            }
            if (pix < 0) {
                pix = 0;
            }
            column = "col" + Math.round(pix / 70);
            coin0.css("left", pix);
        }
        if (e.code == "Enter") {
            if (zeroGravity == "false") {
                for (y = 6; y >= 0; y--) {
                    for (x = 5; x >= 0; x--) {
                        if ($(matrix[x][y]).hasClass(column)) {
                            for (var c = 5; c >= 0; c--) {
                                if (gameover) {
                                    break;
                                }
                                if (
                                    !$(matrix[c][y]).hasClass("coin1") &&
                                    !$(matrix[c][y]).hasClass("coin2")
                                ) {
                                    xx = c;
                                    yy = y;
                                    h = 70 + 70 * c;
                                    x = 0;

                                    break;
                                }
                            }
                        }
                    }
                }
            }
            if (!gameover) {
                setTimeout(function () {
                    $(matrix[xx][yy]).addClass(coin);
                    verticalCheck(coin);
                    orizontalCheck(coin);
                    diagonal1Check(coin);
                    diagonal2Check(coin);
                    oldCoin = coin;
                    coin = turns();
                }, 500);
            }
            if (!gameover) {
                console.log(Math.round(pix / 70));
                coin0.css("top", h);
                coin0.addClass("invisible");

                setTimeout(function () {
                    coin0.css("top", 0);
                    coin0.removeClass(oldCoin);

                    coin0.addClass(coin);

                    coin0.css("transition", 0);
                    coin0.removeClass("invisible");
                }, 500);
            } else {
                coin0.css("width", 0);
                coin0.css("height", 0);
            }

            console.log("enter");
        }
    });

    //New Game button
    var newGame = $("#newgame");
    newGame.on("click", function () {
        for (x = 0; x < 6; x++) {
            for (y = 0; y < 7; y++) {
                matrix[x][y].removeClass("winning");
                matrix[x][y].removeClass("coin1");
                matrix[x][y].removeClass("coin2");
            }
        }

        $("#victory").addClass("invisible");
        $("#victory").removeClass("coin1");
        $("#victory").removeClass("coin2");

        console.log(gameover);
        gameover = false;
        console.log(gameover);
    });

    //Machine
    function machine2() {
        if (gameover) {
            return;
        }
        var mx = Math.floor(Math.random() * 6);
        var my = Math.floor(Math.random() * 7);

        if (zeroGravity == "false") {
            for (x = 5; x >= -1; x--) {
                if (x < 0) {
                    machine2();
                }
                if (
                    !matrix[x][my].hasClass("coin1") &&
                    !matrix[x][my].hasClass("coin2")
                ) {
                    matrix[x][my].addClass(coin);
                    verticalCheck(coin);
                    orizontalCheck(coin);
                    diagonal1Check(coin);
                    diagonal2Check(coin);
                    coin0.removeClass(coin);
                    coin = turns();
                    coin0.addClass(coin);

                    return;
                }
            }
        }

        if (zeroGravity == "true") {
            if (
                matrix[mx][my].hasClass("coin1") ||
                matrix[mx][my].hasClass("coin2")
            ) {
                machine2();
            } else {
                matrix[mx][my].addClass(coin);
                verticalCheck(coin);
                orizontalCheck(coin);
                diagonal1Check(coin);
                diagonal2Check(coin);
                coin0.removeClass(coin);
                coin = turns();
                coin0.addClass(coin);
                return;
            }
        }
    }
})();
