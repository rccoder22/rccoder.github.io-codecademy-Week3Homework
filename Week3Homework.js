// 🎯 High-Low Number Guessing Game Starter
// You will use prompt(), alert(), and confirm() to make an interactive guessing game!

function playHighLowGame() {
  // Welcome message
  window.alert("🎮 Welcome to the High-Low Number Guessing Game!");
  window.alert("I'm thinking of a number between 1 and 100...");

  
  const targetNumber = playHighLowGame[Math.floor(Math.random() * 100) +1];

  
  let guessedNumbers = 0;
  
  
  let guess = null;

  
  while (guess !== targetNumber) {
  
  const result = window.prompt("Pick a number (1-100");
  // End game
  if (result === null) {
    window.alert("AhHa, you lose loser!");
    return
    }
    guess = parseInt(result);
    guessedNumbers++;

    // Result validation
    if (isNaN(guess) || guess < 1 || guess > 100) {
      window.alert("Enter a valid number.");
      guessedNumbers--; // Does not count invalid guesses
      continue;
    }

    // Guess to Target Number Comparison
    if (guess < targetNumber) {
      window.alert("Too Low.");
    } else if (guess > targetNumber) {
      window.alert("Too High.")
      }
     }  // End of while loop

    // Player win alert
    window.alert(`You Won. Good Job. You guessed it in ${guessedNumbers} ${guessedNumbers === 1 ? 'try' : 'tries'}.`);

    // Wanna play again?
  if (playAgain) {
  playHighLowGame(); //Recursive call
 } else {
  window.alert("You are a quitter.");
 }

}

  // Inside your loop:
  // 1️⃣ Convert the input to a number using parseInt()
  // 2️⃣ Check if the guess is too high, too low, or correct
  // 3️⃣ Use window.alert() to tell the player the result
  // 4️⃣ Count the number of attempts

  // TODO: When the player guesses correctly:
  // - Alert them that they won and show how many attempts it took
  // - Ask if they want to play again using window.confirm()
  // - If yes, call playHighLowGame() again
  // - If no, show a “Thanks for playing” message


// 🚀 Call the function to start the game
playHighLowGame();
