let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  num = Math.random();
  let choice = "";
  if(num < 0.33) {
    choice = "rock";
  } else if( num < 0.66 && num > 0.33) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors?");
  return choice;
}

  
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  //tie games
  if(humanChoice == computerChoice) {
    console.log(`Its a tie you both chose ${humanChoice}`);
  } else if (
              (humanChoice == "rock" && computerChoice == "paper") ||
              (humanChoice == "paper" && computerChoice == "scissors") ||
              (humanChoice == "scissors" && computerChoice == "rock")
            ){
    console.log(`You lost ${computerChoice} beats ${humanChoice}!`); 
    computerScore++;           
  } else {
    console.log(`You won ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  }
}

document.querySelector(".rockButton").addEventListener("click", () =>playRound("rock"));

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);

if(humanScore > computerScore) {
  console.log("You won the game");
} else {
  console.log("you lost the game");
}


