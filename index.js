// declare needen variables
const choices = ["Rock", "Paper", "Scissors"];
let computerChoice = null
let playerChoice = null

// Make a function that returns computer's choice
function getComputerChoice(){
    computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice)
}
getComputerChoice()

// Make a function that plays a round of the game and returns the result
function playGame(choice){
    playerChoice = choice
    console.log(playerChoice);
    if (playerChoice === computerChoice){
        document.getElementById("result").textContent="It's a tie!"
    }
}
