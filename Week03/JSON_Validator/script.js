(function () {
    var input = document.getElementById("code");
    var validate = document.getElementById("validate");
    var answer = document.getElementById("answer");
    var code;
    var validation = true;

    input.addEventListener("input", function () {
        validation = true;
        answer.innerHTML = "";
        answer.style.visibility = "hidden";
        code = input.value;
    });

    validate.addEventListener("click", function () {
        var j;

        if (code == undefined) {
            answer.innerHTML = "No code found";
            answer.style.visibility = "visible";
            return;
        }

        try {
            j = JSON.parse(code);
            console.log(j);
        } catch (err) {
            validation = false;
        }

        if (validation == false) {
            answer.innerHTML = "ERROR: INVALID JSON";
            answer.style.visibility = "visible";
        } else {
            answer.innerHTML = "VALID JSON!";
            answer.style.visibility = "visible";
        }
    });
})();
