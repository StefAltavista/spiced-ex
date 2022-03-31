(function () {
    const rev = (array) => {
        return [...array].reverse();
    };

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("Original array:", arr, "Reversed Clone:", rev(arr));
})();
