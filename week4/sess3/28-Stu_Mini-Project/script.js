var startGameButton = document.querySelector("#the-button");
startGameButton.addEventListener("click", setTime());
var secondsLeft = 30;
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    var timeEl = document.querySelector("#timer");
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left for the game.";
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
      console.log("Timer is working");
    }
  }, 1000);

  var allwords = "";
  function randompick() {
    var words = math.random;
  }
}
