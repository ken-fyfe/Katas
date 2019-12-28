// this removes spaces from the text and returns the string with an equal 
// number of rows and columns. Transposed. Roughly.
const squareCode = function(message) {
  // let's remove those pesky spaces
  let remainingText = "";
  for (let i = 0; i < message.length; i++) {
    let letter = message[i];
    if (letter != " ") {
      remainingText += letter;
    }
  }
  
  // determine the square root of the number of letters in remaining string
  const totalLetters = remainingText.length
  const lineLength = Math.ceil(Math.sqrt(totalLetters));
  
  // put the text into a 2D array
  let wordMatrix = [];
  for (let i = 0; i < lineLength; i++) {
    wordMatrix[i] = [];
    for (let j = 0; j < lineLength; j++) {
      if (i+1 * j+1 < totalLetters) {
        wordMatrix[i][j] = remainingText[i*lineLength + j];
      }
    }
  }

  // transpose the matrix for the desired effect
  let transposedMatrix = [];
  for (let i = 0; i < lineLength; i++) {
    transposedMatrix[i] = [];
    for (let j = 0; j < lineLength; j++) {
      transposedMatrix[i][j] = wordMatrix[j][i];
    }
  }
  
  // write out in a single line
  outputString = "";
  for (let i = 0; i < lineLength; i++) {
    for (let j = 0; j < lineLength; j++) {
      let letter = transposedMatrix[i][j];
      if (letter == undefined) {letter = "";}
      outputString += letter;
    }
    outputString += " ";
  }

  return outputString;
};

// test the function here!
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));