let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");

guessBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "🚫 Enter a number between 1 and 100";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  if (userGuess === randomNumber) {
    feedback.textContent = `🎉 Correct guess!`;
    disableInput(); 
  } else if (userGuess > randomNumber) {
    feedback.textContent = "📈 Too high";
  } else {
    feedback.textContent = "📉 Too low";
  }

  guessInput.value = "";
});

function disableInput() {
  guessInput.disabled = true;
  guessBtn.disabled = true;
}
