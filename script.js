// gives a random value from the array
function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    let randomPlay = Math.floor(Math.random() * choice.length);
    return choice[randomPlay]

}

let playerScore = 0;
let computerScore = 0;

// Plays a round
function playRound() {
    const playerSelection = "rock";
    const computerSelection = computerPlay();
    playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Double rock! That's a tie!"
        }
        else if (computerSelection === "paper") {
            return "Paper beats rock, you lose!", computerScore++
        }
        else {
            return "Rock beats scissors! You win!", playerScore++
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "Double paper! That's a tie!"
        }
        else if (computerSelection === "scissors") {
            return "Scissors beats paper, you lose!", computerScore++
        }
        else {
            return "Paper beats rock! You win!", playerScore++
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            return "Double scissors! That's a tie!"
        }
        else if (computerSelection === "rock") {
            return "Rock beats scissors, you lose!", computerScore++
        }
        else {
            return "Scissors beats paper! You win!", playerScore++

        }
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        playRound();
    }
    console.log(playerScore, computerScore)
}