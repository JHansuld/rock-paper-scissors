const choices = ["ROCK", "PAPER", "SCISSORS"]

// Makes the computers pick
function computerPlay() {
    const min = Math.ceil(0)
    const max = Math.floor(3)
    let rndm = Math.floor(Math.random() * (max - min) + min)
    let computerChoice = choices[rndm]
}
// Plays a round
function playRound(playerSelection, computerChoice) {
    playerSelection = playerSelection.toCapitalize
    if (playerSelection === "ROCK") {
        if (computerChoice === "ROCK") {
            return "Double rock! That's a tie!"
        }
        else if (computerChoice === "PAPER") {
            return "Paper beats rock, you lose!"
        }
        else {
            return "Rock beats scissors! You win!"
        }
    }
    else if (playerSelection === "PAPER") {
        if (computerChoice === "PAPER") {
            return "Double paper! That's a tie!"
        }
        else if (computerChoice === "SCISSORS") {
            return "Scissors beats paper, you lose!"
        }
        else {
            return "Paper beats rock! You win!"
        }
    }
    else if (playerSelection === "SCISSORS") {
        if (computerChoice === "SCISSORS") {
            return "Double scissors! That's a tie!"
        }
        else if (computerChoice === "ROCK") {
            return "Rock beats scissors, you lose!"
        }
        else {
            return "Scissors beats paper! You win!"
        }
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));