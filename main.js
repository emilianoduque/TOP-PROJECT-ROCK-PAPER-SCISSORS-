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

const objetoAyuda = {
  "rock": "paper",
  "paper": "scissors",
  "scissors": "rock"
}

if (objetoAyuda[humanChoice] == computerChoice ){
  computerScore++;
  console.log(
    `You chose ${humanChoice} and the computer chose ${computerChoice}, !Computer Wins!` 
  )
  } else if (objetoAyuda[computerChoice] == humanChoice){
    humanScore++;
    console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, !You Win!`)
  } else if (humanChoice == computerChoice) {
    console.log(`Both of you chose ${humanChoice}, so nobody wins`);
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
