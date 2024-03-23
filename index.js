// Make a function that returns at random Rock Paper or Scissors - it will be the computer's 'choice'
const choices = ["Rock", "Paper", "Scissors"];
let playerChoice = null

function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());

// Make a function that returns the player's choice

function getPlayerChoice(choice){
    console.log(choice);
    return choice;
}


// Make a function that plays a round of the game and returns the result

// Make a new function that uses the previous function and variable to play the game and keep score