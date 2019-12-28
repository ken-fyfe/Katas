// a number guessing game

// the following was given in the exercise, but not sure how it gets used!
// {
//   "dependencies": {
//     "prompt-sync": "^4.1.5"
//   }
// }
//
// I end up doing > npm install package.json
// followed by    > npm install prompt-sync

const guessNumber = function() {
  // initialize prompt engine
  let prompt = require("prompt-sync")();

  // initialize random number to be guessed
  const guessNumberRange = 100;
  const numberToBeGuessed = Math.floor(Math.random() * guessNumberRange);
  //console.log("The number to be guessed is: " + numberToBeGuessed + "\n");
  console.log("Guess a number between 1 and " + guessNumberRange);

  // set up the main guessing loop
  let correctAnswerNotFound = true;
  let numberOfAttempts = 0;
  let guessedNumbers = [];
  while(correctAnswerNotFound) {
    console.log("Guess a number:")
    let promptedAnswer = prompt("> ");
    if (isNaN(promptedAnswer)) { // determine if it's a number
      console.log("Not a number. Try again!")
    } else {
      if (promptedAnswer == numberToBeGuessed) {  // correct answer
        numberOfAttempts += 1;
        attemptString = "";
        if (numberOfAttempts === 1) {
          attemptString = " attempt!";
        } else {
          attemptString = " attempts!";
        }
        console.log("You got it! You took " + numberOfAttempts + attemptString)
        correctAnswerNotFound = false;
      } else {  // incorrect answer
        if (guessedNumbers.includes(promptedAnswer)) { // check if repeated try
          console.log("Already Guessed!");
        } else {  // indicate if above or below true value
          numberOfAttempts += 1;
          guessedNumbers.push(promptedAnswer);
          if (promptedAnswer < numberToBeGuessed) {
            console.log("Too Low!")
          } else {
            console.log("Too High!")
          }
        }
      }
    }
  }
}

// test the function
guessNumber();