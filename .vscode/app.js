var userscore = 0;
var computerscore = 0;
var userscore_span = document.getElementById("userscore");
var computerscore_span = document.getElementById("computerscore");
var scoreboard_div = document.querySelector(".scoreboard");
var result_div = document.querySelector(".result > p");
var stone_div = document.getElementById("s");
var paper_div = document.getElementById("p");
var scissor_div = document.getElementById("sc");

function getcomputerchoice() {
    const choices = ['s', 'p', 'sc'];
    const randomnumber = (Math.floor(Math.random() * 3));
    return choices[randomnumber];
}

function convert(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissor";

}

function win(userchoice, computerchoice) {
    userscore++;
    userscore_span.innerHTML = userscore;
    result_div.innerHTML = convert(userchoice) + " beats " + convert(computerchoice);
}

function lost(userchoice, computerchoice) {
    computerscore++;
    computerscore_span.innerHTML = computerscore;
    result_div.innerHTML = convert(computerchoice) + " beats " + convert(userchoice);

}

function draw() {

    result_div.innerHTML = "DRAW!";

}

function game(userchoice) {
    const computerchoice = getcomputerchoice();
    switch (userchoice + computerchoice) {
        case "pr":
        case "rs":
        case "sp":
            console.log("USER WINS!");
            win(userchoice, computerchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("COMPUTER WINS!");
            lost(userchoice, computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("DRAW!");
            draw();

    }
}

function main() {
    stone_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissor_div.addEventListener('click', function() {
        game("s");
    })
}
main();