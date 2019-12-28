// camel case maker
let camelCase = function(inputString) {
  let convertedString = "";
  let upperCaseFlag = false;
  inputString = inputString.trim();
  for (let i = 0; i < inputString.length; i++) {
    let currentLetter = inputString[i];
    if (currentLetter !== " ") {
      if (upperCaseFlag) {
        currentLetter = currentLetter.toUpperCase();
        upperCaseFlag = false;
      }
      convertedString += currentLetter;
    } else {
      upperCaseFlag = true;
    }
  }
  return convertedString;
};

// test above function
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));