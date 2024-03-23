const choices = ["Rock", "Paper", "Scissors"];
let computerChoice = null
let playerChoice = null

// Make a function that returns at random Rock Paper or Scissors - it will be the computer's 'choice'

function getComputerChoice(){

    computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice)
}
getComputerChoice()

// Make a function that returns the player's choice
function getPlayerChoice(choice){

    playerChoice = choice
    console.log(playerChoice);

}



// Make a function that plays a round of the game and returns the result

// Make a new function that uses the previous function and variable to play the game and keep score