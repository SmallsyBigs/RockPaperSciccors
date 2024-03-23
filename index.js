// declare needen variables
const choices = ["Rock", "Paper", "Scissors"];
let computerChoice = null;
let playerChoice = null;
let computerResult = 0;
let playerResult = 0 ;

// Make a function that returns computer's choice
function getComputerChoice(){
    computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
}

// Make a function that plays a round of the game and displays the winner
function playGame(choice){
    playerChoice = choice;
    getComputerChoice();
    console.log(playerChoice);
    if (playerChoice === computerChoice){
        document.getElementById("result").textContent="It's a tie!";
    }
    else if(playerChoice == "Rock" && computerChoice == "Paper"){
        document.getElementById("result").textContent="You Loose!";
        computerResult = computerResult + 1;
    }
    else if(playerChoice == "Rock" && computerChoice == "Scissors"){
        document.getElementById("result").textContent="You Win!";
        playerResult = playerResult + 1;
    }
    else if(playerChoice == "Paper" && computerChoice == "Rock"){
        document.getElementById("result").textContent="You Win!";
        playerResult = playerResult + 1;
    }
    else if(playerChoice == "Paper" && computerChoice == "Scissors"){
        document.getElementById("result").textContent="You Loose!";
        computerResult = computerResult + 1;
    }
    else if(playerChoice == "Scissors" && computerChoice == "Rock"){
        document.getElementById("result").textContent="You Loose!";
        computerResult = computerResult + 1;
    }
    else if(playerChoice == "Scissors" && computerChoice == "Paper"){
        document.getElementById("result").textContent="You Win!";
        playerResult = playerResult + 1;
    }
    document.getElementById("playerScore").innerHTML = playerResult
    document.getElementById("computerScore").innerHTML = computerResult
    if (computerResult >= 5){
        alert("You have lost :(")
    }
    if (playerResult >= 5){
        alert("You have won !!! :)")
    }
}

