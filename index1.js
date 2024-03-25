let playerScore = 0;
let computerScore = 0;

// The purpuse of the function is to get user's choice in the game
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

// We need a computer's choice, hence the function
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return computerChoice = choices[Math.floor(Math.random() * 3)];
}

// The purpuse of the function is to play one round of the game
// The game is played in console so it logs the information and keeps track of the score so we can declare winner later
function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        console.log(playerChoice);
        console.log(computerChoice);
        console.log("it's a tie!");
    }
    else if(playerChoice == "rock" && computerChoice == "scissors"){
        console.log(playerChoice);
        console.log(computerChoice);
        console.log("You win!");
        playerScore += 1;
    }
    else if(playerChoice == "scissors" && computerChoice == "paper"){
        console.log(playerChoice);
        console.log(computerChoice);
        console.log("You win!");
        playerScore += 1;
    }
    else {
        console.log(playerChoice);
        console.log(computerChoice);
        console.log("You loose!");
        computerScore += 1;
    }
}

//The function repeats the previous function 5 times so the winner can be declared
function playGame(){
    for (let i = 0; i < 5; i++){
    playRound(getPlayerChoice(), getComputerChoice());
    }
    console.log(playerScore);
    console.log(computerScore);
    if(playerScore > computerScore){
        console.log("You have won!!!");
    }
    else if(playerScore == computerScore){
        console.log("it's a tie!!!");
    }
    else {
        console.log("You have lost :(");
    }
}
playGame();
