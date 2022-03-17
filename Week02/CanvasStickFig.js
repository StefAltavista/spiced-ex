(function () {
    //var can = document.createElement("canvas");
    var can = document.getElementById("canv1");
    var can2 = document.getElementById("canv2");

    var ctx = can.getContext("2d");
    var ctx2 = can2.getContext("2d");

    var w = (can.width = 400);
    var h = (can.height = 500);

    var w2 = (can2.width = 500);
    var h2 = (can2.height = 600);

    //drawing border of the canvas
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, 400, 500);
    ctx.stroke();

    //Drawing stick figure

    ctx2.beginPath();
    ctx2.lineWidth = 3;
    ctx2.arc(w / 2, h / 4, 30, 0, 2 * Math.PI);
    ctx2.moveTo(w / 2, h / 4 + 30);
    ctx2.lineTo(w / 2, h / 4 + 150);
    ctx2.lineTo(w / 2 - 70, h / 4 + 250);
    ctx2.moveTo(w / 2, h / 4 + 150);
    ctx2.lineTo(w / 2 + 70, h / 4 + 250);
    ctx2.moveTo(w / 2, h / 3);
    ctx2.lineTo(w / 2 - 70, h / 4 + 100);
    ctx2.moveTo(w / 2, h / 3);
    ctx2.lineTo(w / 2 + 70, h / 4 + 100);
    ctx2.stroke();

    var countOrizontal = 0;
    var countVertical = 0;
    replaceStick(countOrizontal, countVertical);

    //moving canvas
    document.body.addEventListener("keydown", function (e) {
        console.log(e.code);
        if (e.code == "ArrowUp") {
            countVertical--;
            ctx.clearRect(10, 10, 380, 480);
            replaceStick(countOrizontal, countVertical);

            console.log(countVertical);
        }
        if (e.code == "ArrowDown") {
            countVertical++;
            ctx.clearRect(10, 10, 380, 480);
            replaceStick(countOrizontal, countVertical);
        }
        if (e.code == "ArrowRight") {
            countOrizontal++;
            ctx.clearRect(10, 10, 380, 480);
            replaceStick(countOrizontal, countVertical);
        }
        if (e.code == "ArrowLeft") {
            countOrizontal--;
            ctx.clearRect(10, 10, 380, 480);
            replaceStick(countOrizontal, countVertical);
        }
        //ctx.drawImage(img(), countOrizontal * 10, countVertical * 10);
    });

    function replaceStick(x, y) {
        ctx.drawImage(can2, x * 10, y * 10);
    }
})();
