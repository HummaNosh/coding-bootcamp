const startButton = document.getElementById("start-button");
const wordToGuessDiv = document.getElementById("word-to-guess");
const timerElement = document.getElementById("timer");
const gameStatusElement = document.getElementById("game-status");
const winsElement = document.getElementById("wins");
const lossesElement = document.getElementById("losses");

startButton.addEventListener("click", startGame);
document.addEventListener("keydown", guessLetter);

let wins = localStorage.getItem("wins");
let losses = localStorage.getItem("losses");
if (!wins) {
  wins = 0;
}
if (!losses) {
  losses = 0;
}

displayLossesAndWins();

let wordToGuess = "";
let lettersGuessedSoFar = [];
let gameStarted = false;
let secondsRemaining;
let timer;

function startGame() {
  wordToGuess = "hello";
  displayWordToGuess();
  gameStarted = true;
  secondsRemaining = 10;
  startTimer();
}

function startTimer() {
  refreshTimerMessage();
  timer = setInterval(decrementTimer, 1000);
}

function decrementTimer() {
  secondsRemaining--;
  if (secondsRemaining < 0) {
    clearInterval(timer);
    loseGame();
    return;
  }
  refreshTimerMessage();
}

function refreshTimerMessage() {
  timerElement.textContent = "You have " + secondsRemaining + "s";
}

function displayWordToGuess() {
  wordToGuessDiv.innerHTML = "";
  const list = document.createElement("ul");
  for (let i = 0; i < wordToGuess.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = "_";
    const character = wordToGuess.charAt(i);
    if (lettersGuessedSoFar.indexOf(character) >= 0) {
      listItem.innerText = character.toUpperCase();
    }
    list.appendChild(listItem);
  }
  wordToGuessDiv.appendChild(list);
}

function guessLetter(event) {
  if (!gameStarted) {
    return;
  }
  const key = event.key.toLowerCase();
  if (key < "a" || key > "z") {
    console.log("Illegal key: " + key);
    return;
  }
  if (lettersGuessedSoFar.indexOf(key) >= 0) {
    console.log("Already guessed: " + key);
    return;
  }
  lettersGuessedSoFar.push(key);
  displayWordToGuess();
  checkForWin();
}

function loseGame() {
  timerElement.innerHTML = "";
  gameStatusElement.innerHTML = "You've run out of time";
  losses++;
  localStorage.setItem("losses", losses);
  displayLossesAndWins();
}

function checkForWin() {
  for (let i = 0; i < wordToGuess.length; i++) {
    const character = wordToGuess.charAt(i);
    if (lettersGuessedSoFar.indexOf(character) < 0) {
      return;
    }
  }
  winGame();
}

function winGame() {
  timerElement.innerHTML = "";
  gameStatusElement.innerHTML = "You've won";
  clearInterval(timer);
  wins++;
  localStorage.setItem("wins", wins);
  displayLossesAndWins();
}

function displayLossesAndWins() {
  winsElement.innerHTML = wins;
  lossesElement.innerHTML = losses;
}
