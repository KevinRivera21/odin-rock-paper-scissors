let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * options.length);
    return options[computerChoice];
}

