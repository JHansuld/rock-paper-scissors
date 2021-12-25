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
    const playerSelection = window.prompt("Rock, paper, or scissors?");
    const computerSelection = computerPlay();
    playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            window.alert("Double rock! That's a tie!")
        }
        else if (computerSelection === "paper") {
            window.alert("Paper beats rock, you lose!")
            return computerScore++
        }
        else {
            window.alert("Rock beats scissors! You win!")
            return playerScore++
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            window.alert("Double paper! That's a tie!")
        }
        else if (computerSelection === "scissors") {
            window.alert("Scissors beats paper, you lose!")
            return computerScore++
        }
        else {
            window.alert("Paper beats rock! You win!")
            return playerScore++
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            window.alert("Double scissors! That's a tie!")
        }
        else if (computerSelection === "rock") {
            window.alert("Rock beats scissors, you lose!")
            return computerScore++
        }
        else {
            window.alert("Scissors beats paper! You win!")
            return playerScore++

        }
    }
}
// main function
function game() {
    for (i = 0; i < 5; i++) {
        playRound();
    }
    console.log(playerScore, computerScore)
}