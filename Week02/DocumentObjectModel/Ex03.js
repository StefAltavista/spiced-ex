(function () {
    function newElement(el, con) {
        var newEl = document.createElement(el);
        var content = document.createTextNode(con);
        newEl.appendChild(content);
        document.body.appendChild(newEl);
        return newEl;
    }

    var awesome = newElement("h1", "AWESOME");
    awesome.style.position = "fixed position";
    awesome.style.zIndex = "2147483647";
    awesome.style.left = "20px";
    awesome.style.top = "100px";
    awesome.style.fontSize = "200px";
})();
