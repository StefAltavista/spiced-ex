function Countdown(num) {
    this.number = num;
    this.count = function () {
        delay(this.number);
        function delay(i) {
            if (i >= 0) {
                setTimeout(function () {
                    console.log(i);
                    i--;
                    delay(i);
                }, 1000);
            } else return;
        }
    };
}

var a = new Countdown(10);

a.count();
