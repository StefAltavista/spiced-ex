function millionaire(n) {
    n <= 0 || n == NaN
        ? console.log("ERROR")
        : n > 1000000
        ? console.log(n)
        : millionaire(n * 10);
}

millionaire(15);
