(function () {
    var allMemos = $("#allMemos");
    var textArea = $("textarea:nth-child(1)");
    var clear = $("#clear");
    var newMemo = $("#new");
    var divAdd = $(".add");
    var memo;
    var memo2;
    var arrayM = [];
    var i = 0;
    function insertText() {
        if (i < memo.length) {
            textArea.val(textArea.val() + memo[i]);
            i++;
            setTimeout(insertText, 50);
        } else i = 0;
        return;
    }

    setTimeout(function () {
        if (localStorage.getItem("memo") != undefined) {
            memo = localStorage.getItem("memo");

            insertText();
        }
        if (localStorage.getItem("memo") == undefined) {
            alert("Memo is empty :(");
        }
    }, 300);
    try {
        textArea.on("input", function () {
            memo = textArea.val();
            localStorage.setItem("memo", memo);
        });
    } catch {
        alert("Local Storage Error");
    }

    clear.on("click", function () {
        if (confirm("Are you sure?") == true) {
            memo = "";
            localStorage.clear();
            textArea.val(memo);
        }
    });

    newMemo.on("click", function () {
        var offsetL = textArea.offset().left;

        textArea.css("margin-left", offsetL - 5);

        setTimeout(function () {
            textArea.css("margin-left", 0);
            textArea.addClass("left");
            createTextArea();
        }, 5);
    });

    function createTextArea() {
        setTimeout(function () {
            var a =
                divAdd.html() +
                ' <textarea class="new"  placeholder="Write your notes here..."></textarea>';

            divAdd.html(a);
            createMemo();
        }, 2000);
    }

    function createMemo() {
        var another = $(".new");
        another.addClass("center");
        return another;
    }
    textArea.on("click", function () {
        console.log("ok");
        if (textArea.hasClass("left")) {
            textArea.removeClass("left");
            arrayM[0].addClass("left");
        }
    });

    arrayM[0] = createMemo();

    try {
        arrayM[0].on("input", function () {
            memo2 = arrayM[0].val();
            localStorage.setItem("memo2", memo2);
        });
    } catch {
        alert("Local Storage Error");
    }
})();
