(function () {
    const merge = (arr1, arr2) => {
        return [...arr1, ...arr2];
    };
    const list1 = ["something", "something else"];
    const list2 = ["more stuff", "even more stuff"];

    console.log(merge(list1, list2));
})();
