const choices = ["Rock", "Paper", "Scissors"]
const min = Math.ceil(0)
const max = Math.floor(3)

function computerPlay() {
    let rndm = Math.floor(Math.random() * (max - min) + min)
    let computerChoice = choices[rndm]
    return computerChoice
}