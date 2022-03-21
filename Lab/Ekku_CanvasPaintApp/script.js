window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //Resizing the canvas
    //Might want to set this into a function and call upon resize?
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    }

    //Define when pen on the canavs (mouse is state clicked)
    let painting = false; //should start at false

    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    //event listeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
});
