const readline = require("readline");
const chalk = require("chalk");
let colorQ = "white";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let story = {
    q: "Let's start the Game!\nDo you wanna proceed?\n",
    yes: {
        q: "are you really sure?\n",
        yes: {
            q: "ok! What does 1+1 equals to?\n",
            2: "End",
        },
        no: "End",
    },
    no: "End",
};

chooseColor();

function chooseColor() {
    rl.question(
        chalk.bgWhite.bold("\nWhat's your favourite color?\n"),
        function (answer) {
            try {
                console.log(chalk[answer].bold("Good Choice!"));
                colorQ = answer;
                questionAnswer(story);
            } catch {
                console.log(chalk.bgRed.bold("Wrong Color Name!"));
                chooseColor();
            }
        }
    );
}

function questionAnswer(passedObj) {
    rl.question(chalk[colorQ].italic(passedObj.q), function (answer) {
        if (Object.keys(passedObj).includes(answer)) {
            if (typeof passedObj[answer] === "object") {
                questionAnswer(passedObj[answer]);
            } else {
                console.log(chalk[colorQ].bold("Nice one!\nEnd of the story"));
                rl.close();
            }
        } else {
            console.log(
                chalk[colorQ](
                    "\nI don't know what you mean... \nlet's try again!\n"
                )
            );
            questionAnswer(passedObj);
        }
    });
}
