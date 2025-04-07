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

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  const container = document.querySelector("#container");
  const content = document.createElement("div");
  content.classList.add("result");

  if(humanChoice == computerChoice) {
    content.textContent = `Its a tie you both chose ${humanChoice} \n 
                          Your Score:${humanScore}, Computer Score:${computerScore}`;
    container.appendChild(content);
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    computerScore++; 
    content.textContent = `You lost ${computerChoice} beats ${humanChoice}! \n 
                           Your Score:${humanScore}, Computer Score:${computerScore}`;
    container.appendChild(content);
                        
  } else {
    humanScore++;
    content.textContent = `You won ${humanChoice} beats ${computerChoice}! \n 
                           Your Score:${humanScore}, Computer Score:${computerScore}`;
    container.appendChild(content);           
  }
  if(humanScore == 5) {
    content.textContent = "Game Over you won!";
    container.appendChild(content);
  }
  if(computerScore == 5) {
    content.textContent = "Game Over you lost!"
    container.appendChild(content);
  }
}


document.querySelector(".rockButton").addEventListener("click", () =>playRound("rock"));
document.querySelector(".paperButton").addEventListener("click", () =>playRound("paper"));
document.querySelector(".scissorsButton").addEventListener("click", () =>playRound("scissors"));







