(function () {
    function findElement(str) {
        var selected = document.querySelectorAll(str);

        for (var element of selected) {
            element.style.fontStyle = "italic";
            element.style.fontWeight = "bold";
            element.style.textDecoration = "underline";
            console.log("i'm in");
        }
    }

    findElement(".this");
})();
