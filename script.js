// gives a random value from the array
function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    let randomPlay = Math.floor(Math.random() * choice.length);
    return choice[randomPlay]

}

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
            return "Paper beats rock, you lose!"
        }
        else {
            return "Rock beats scissors! You win!"
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "Double paper! That's a tie!"
        }
        else if (computerSelection === "scissors") {
            return "Scissors beats paper, you lose!"
        }
        else {
            return "Paper beats rock! You win!"
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            return "Double scissors! That's a tie!"
        }
        else if (computerSelection === "rock") {
            return "Rock beats scissors, you lose!"
        }
        else {
            return "Scissors beats paper! You win!"
        }
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        playRound();
    }
}