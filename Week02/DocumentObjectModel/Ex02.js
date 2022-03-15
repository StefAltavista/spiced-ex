(function () {
    function getArray(str) {
        var selected = document.getElementsByClassName(str);

        var finalArray = Array.prototype.slice.call(selected);

        return finalArray;
    }

    var arr = getArray("Element");
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i]);
    }
})();
