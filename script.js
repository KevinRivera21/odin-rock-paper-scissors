let options = ["rock", "paper", "scissors"];

let playerWins = 0;
let computerWins = 0;

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resultsContainer = document.getElementById('results');
const resultParagraph = document.createElement('p');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');

rockBtn.addEventListener('click', () => game("rock"));
paperBtn.addEventListener('click', () => game("paper"));
scissorsBtn.addEventListener('click', () => game("scissors"));

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * options.length);
    return options[computerChoice];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerWins++;
        return "You Won the round! Rock beats Scissors";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerWins++;
        return "You Lost the round! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerWins++;
        return "You Won the round! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerWins++;
        return "You Lost the round! Scissors beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerWins++;
        return "You Lost the round! Rock beats Scissors";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerWins++;
        return "You Won the round! Scissors beats Paper";
    } else {
        return "The round is a tie !"
    }
}

function game(playerSelection) {
    let computerSelection = getComputerChoice();
    displayResults("You chose: " + playerSelection);
    displayResults("Computer chose: " + computerSelection);
    displayResults(playRound(playerSelection, computerSelection));

    if (playerWins == 3) {
        displayResults("Congratulations! You have won the game.");
        playerWins = 0;
        computerWins = 0;
    }
    else if (computerWins == 3) {
        displayResults("You have lost the game");
        playerWins = 0;
        computerWins = 0;
    }
}
function displayResults(message) {
    if (resultParagraph) {
        resultParagraph.remove
    }
    resultParagraph.textContent = message;
    playerScore.textContent = "Your score: " + playerWins;
    computerScore.textContent = "Computer score: " + computerWins;
    resultsContainer.appendChild(resultParagraph);
    resultsContainer.appendChild(playerScore);
    resultsContainer.appendChild(computerScore);
}