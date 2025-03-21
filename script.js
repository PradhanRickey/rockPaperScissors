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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
    const normalizedChoice = humanChoice.toLowerCase();
    //tie games
    if(normalizedChoice == "rock" && computerChoice == "rock") {
      console.log(`Its a tie you both chose ${normalizedChoice}`);
    }
    if(normalizedChoice == "paper" && computerChoice == "paper") {
      console.log(`Its a tie you both chose ${normalizedChoice}`);
    }
    if(normalizedChoice == "scissors" && computerChoice == "scissors") {
      console.log(`Its a tie you both chose ${normalizedChoice}`);
    }
    //lose scenarios
    if(normalizedChoice == "rock" && computerChoice == "paper") {
      console.log(`You lost ${computerChoice} beats ${normalizedChoice}!`);
      computerScore++;
    }
    if(normalizedChoice == "paper" && computerChoice == "scissors") {
      console.log(`You lost ${computerChoice} beats ${normalizedChoice}!`);
      computerScore++;
    }
    if(normalizedChoice == "scissors" && computerChoice == "rock") {
      console.log(`You lost ${computerChoice} beats ${normalizedChoice}!`);
      computerScore++;
    }
    //win scenarios
    if(normalizedChoice == "paper" && computerChoice == "rock") {
      console.log(`You won ${normalizedChoice} beats ${computerChoice}!`);
      humanScore++;
    }
    if(normalizedChoice == "scissors" && computerChoice == "paper") {
      console.log(`You won ${normalizedChoice} beats ${computerChoice}!`);
      humanScore++;
    }
    if(normalizedChoice == "rock" && computerChoice == "scissors") {
      console.log(`You won ${normalizedChoice} beats ${computerChoice}!`);
      humanScore++;
    }
  }
  
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);

  if(humanScore > computerScore) {
    console.log("You won the game");
  } else {
    console.log("you lost the game");
  }
}

playGame();

