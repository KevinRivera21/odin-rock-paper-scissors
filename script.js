let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * options.length);
    return options[computerChoice];
}
    let playerWins = 0;
    let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerWins++;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerWins++;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerWins++;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerWins++;
        return "You Lose! Scissors beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerWins++;
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerWins++;
        return "You Win! Scissors beats Paper";
    }
}

function game() {
    let playerSelection;
    let computerSelection;
    while (playerWins < 3 && computerWins < 3) {
        playerSelection = prompt("rock, paper, or scissors?");
        computerSelection = getComputerChoice();
        alert("Computer chose: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerWins == 3) {
        console.log("Congratulations! You have won.");
    }
    else if (computerWins == 3) {
        console.log("You have lost");
    }
}

game();