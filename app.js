// Neutralise
let userScore = 0;
let computerScore = 0;

// Score Board and Result
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const theResult = document.querySelector(".result");

// options
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

// Computer Choice
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// convert to word
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissor";
}

// user wins
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  theResult.innerHTML = `${convertToWord(userChoice)}(User)  beats 
    ${convertToWord(computerChoice)}(Computer). YOU WIN! 🚀`;
}

// user loses
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  theResult.innerHTML = `${convertToWord(computerChoice)}(Computer)  beats 
  ${convertToWord(userChoice)}(User). YOU LOSE!`;
  console.log("you lose");
}

//draw
function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  theResult.innerHTML = `${convertToWord(userChoice)}(User)  equals 
    ${convertToWord(computerChoice)}(Computer). It's a Draw! 🚀`;
}

// game function
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

// main function
function main() {
  rock.addEventListener("click", function () {
    game("r");
  });

  paper.addEventListener("click", function () {
    game("p");
  });

  scissor.addEventListener("click", function () {
    game("s");
  });
}
main();
