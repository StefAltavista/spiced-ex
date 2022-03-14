/*ORIGINAL CODE
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
}*/

//More Compact Remake + pause Function

function Countdown(num) {
    this.pause = false;
    this.number = num;
    this.count = function () {
        if (this.number >= 0 && this.pause === false) {
            setTimeout(
                function () {
                    console.log(this.number);
                    this.number--;
                    this.count();
                }.bind(this),
                1000
            );
        } else console.log("Remaining Time:", a.number);
    };
}

var a = new Countdown(10);

a.count();

function pauseAfter(t) {
    setTimeout(function () {
        a.pause = true;
    }, t * 1000);
}

pauseAfter(5);
console.log("Remaining Time:", a.number);
