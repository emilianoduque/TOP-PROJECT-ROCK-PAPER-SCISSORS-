function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = options[randomNumber];
  return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let humanChoice = prompt("rock, paper or scissors").toLowerCase();
  if (!["rock", "paper", "scissors"].includes(humanChoice)){
    console.log("Please use a valid word")
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    console.log(
      `You chose ${humanChoice} and the computer chose ${computerChoice}, !You Win!`
    );
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log(`Both of you chose "paper", so nobody wins`);
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    console.log(
      `You chose ${humanChoice} and computer chose ${computerChoice}, !Computer Wins!`
    );
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    console.log(
      `You chose ${humanChoice} and the computer chose ${computerChoice}, !Computer Wins!`
    );
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    console.log(
      `You chose ${humanChoice} and computer chose ${computerChoice}, !You Win!`
    );
  } else if (humanChoice == "rock" && computerChoice == "rock") {
    console.log(`Both of you chose rock, so nobody wins`);
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    console.log(
      `You chose ${humanChoice} and computer chose ${computerChoice}, !You Win!`
    );
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log(`Both of you chose scissors, so nobody wins`);
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    console.log(
      `You chose ${humanChoice} and computer chose ${computerChoice}, !Computer Wins!`
    );
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  while (humanScore < 3 && computerScore < 3) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  if (humanScore === 3) {
    console.log("Congratulations You won the game!")
  } else {
    console.log("The computer wons the game, better luck next time")
  }
}

playGame();
