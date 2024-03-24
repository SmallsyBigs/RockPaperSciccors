let playerScore = 0
let computerScore = 0 

// The function get's player's choice, formats it and reacts if the input is wrong
function getPlayerChoice(){
    const lowerCaseInput = prompt("Type rock, paper, or scissors").toLowerCase();
    if (lowerCaseInput == "rock"){
        return "rock";
    }
    else if (lowerCaseInput == "paper"){
        return "paper";
    }
    else if (lowerCaseInput == "scissors"){
        return "scissors";
    }
    else {
        alert("Wrong input :(");
    }
}

// The function generates and returns random computer's choice
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    return computerChoice = choices[Math.floor(Math.random() * 3)];
}

// This function plays a single round of the game and logs as well as counts the score
function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        console.log(playerChoice)
        console.log(computerChoice)
        console.log("it's a tie!")
    }
    else if(playerChoice == "rock" && computerChoice == "scissors"){
        console.log(playerChoice)
        console.log(computerChoice)
        console.log("You win!");
        playerScore += 1;
    }
    else if(playerChoice == "scissors" && computerChoice == "paper"){
        console.log(playerChoice)
        console.log(computerChoice)
        console.log("You win!");
        playerScore += 1;
    }
    else {
        console.log(playerChoice)
        console.log(computerChoice)
        console.log("You loose!");
        computerScore += 1;
    }
}

//This function plays 5 rounds, logs the score and declare the winner
function playGame(){
    for (let i = 0; i < 5; i++){
    playRound(getPlayerChoice(), getComputerChoice())
    }
    console.log(playerScore)
    console.log(computerScore)
    if(playerScore > computerScore){
        console.log("You have won!!!")
    }
    else if(playerScore == computerScore){
        console.log("it's a tie!!!")
    }
    else {
        console.log("You have lost :(")
    }
}
playGame()
