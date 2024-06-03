function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = options[randomNumber];
  return computerChoice;
}

// CREATING BUTTONS //
const buttonRock = document.createElement("BUTTON");
buttonRock.innerText = "Rock";
const buttonPaper = document.createElement("BUTTON");
buttonPaper.innerText = "Paper";
const buttonScissors = document.createElement("BUTTON");
buttonScissors.innerText = "Scissors";

// PUT THE BUTTONS IN THE HTML //
document.body.appendChild(buttonPaper);
document.body.appendChild(buttonRock);
document.body.appendChild(buttonScissors);

const elements = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};

// CREATE A DIV THAT SHOWS THE RESULTS //
let divResults = document.createElement("DIV");
document.body.appendChild(divResults);

let humanScore = 0;
let computerScore = 0;

// CHECK THE WINNER IN EACH CASE//
function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  if (elements[humanChoice] == computerChoice) {
    computerScore++;
    divResults.innerText = `You chose ${humanChoice} and the computer chose ${computerChoice}, !Computer Wins!`;
  } else if (elements[computerChoice] == humanChoice) {
    humanScore++;
    divResults.innerText = `You chose ${humanChoice} and the computer chose ${computerChoice}, !You Win!`;
  } else if (humanChoice == computerChoice) {
    divResults.innerText = `Both of you chose ${humanChoice}, so nobody wins`;
  }
  checkEndGame();
}

function checkEndGame() {
  if (humanScore === 3 || computerScore === 3) {
    const buttonReset = document.createElement("BUTTON");
    buttonReset.innerText = "Reset";
    buttonReset.id = "resetButton";
    document.body.appendChild(buttonReset);
    buttonReset.addEventListener("click", resetGame);
    if (humanScore === 3) {
      divResults.innerText = "Congrats, you won the game!";
    } else {
      divResults.innerText = "Computer won, better luck next time!";
    }
    buttonPaper.disabled = true;
    buttonRock.disabled = true;
    buttonScissors.disabled = true;
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  divResults.innerText = "";

  buttonPaper.disabled = false;
  buttonRock.disabled = false;
  buttonScissors.disabled = false;

  const buttonReset = document.getElementById("resetButton");
  if (buttonReset) {
    document.body.removeChild(buttonReset);
  }
}

buttonRock.addEventListener("click", function () {
  playRound("rock");
});
buttonPaper.addEventListener("click", function () {
  playRound("paper");
});
buttonScissors.addEventListener("click", function () {
  playRound("scissors");
});
