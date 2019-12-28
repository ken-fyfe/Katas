// convert the string to a variety of formats
const makeCase = function(inputString, caseType) {
  const typeOfInput = typeof(caseType); // determine if string or array
  let arrayType = [];
  if (typeOfInput == "string") {
    arrayType.push(caseType);
  } else {
    arrayType = caseType;
  }

  // camel case function
  function camelFunction(inputText) {
    let convertedString = "";
    let upperCaseFlag = false;
    inputText = inputText.trim();
    for (let i = 0; i < inputText.length; i++) {
      let currentLetter = inputText[i];
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
  }

  // convert spaces in text to character of choice
  function convertSpacetoSomething(inputText,changeChar) {
    let outputString = "";
    for (let i = 0; i < inputText.length; i++) {
      let letter = inputText[i];
      if (letter == " ") { letter = changeChar}
      outputString += letter;
    }
    return outputString;
  }

  //
  function capitalizeFirstWord(inputText) {
    outputString = "";
    let tokens = inputString.split(" ");
    for (let i = 0; i < tokens.length; i++) {
      const firstLetter = tokens[i][0].toUpperCase()
      const word = firstLetter + tokens[i].substr(1, tokens[i].length)
      outputString += word + " ";
    }
    return outputString;
  }
  // determine if letter is a vowel
  function isAVowel(letter) {
    let vowelState = false;
    if (letter == "a" || letter == "i" || letter == "i" || letter == "o" || letter == "u") {
      vowelState = true;
    }
    return vowelState;
  }

  // capitalize vowels or consonants
  function capitalizeVorC(inputText,letterType) {
    outputString = "";
    const lowerCaseString = inputString.toLowerCase(); // will check on lower case version
    for (let i = 0; i < inputString.length; i++) {
      let letter = lowerCaseString[i];
      if (letterType == "vowel") {
        if (isAVowel(letter)) {
          letter = letter.toUpperCase();
        }
        outputString += letter;
      } else if (letterType == "consonant") {
        if (!isAVowel(letter)) { // if it's a consonant
          letter = letter.toUpperCase();
        }
        outputString += letter;
      }
    }
    return outputString;
  }

  // go through all the different types
  for (let loopNum = 0; loopNum < arrayType.length; loopNum++) {
    caseType = arrayType[loopNum];
    if (loopNum > 0) { inputString = outputString} // from previous loop
    switch (caseType) {
      case "camel":
        outputString = camelFunction(inputString);
        break;
      case "pascal": // like camel case, only make first letter capitalized
        outputString = camelFunction(inputString); // then capitalize the first letter
        outputString = outputString[0].toUpperCase() + outputString.substr(1,outputString.length);
        break;
      case "snake": // convert spaces to underscores
        outputString = convertSpacetoSomething(inputString,"_")
        break;
      case "kebab": // convert spaces to dashes
        outputString = convertSpacetoSomething(inputString,"-")
        break;
      case "title": // capitalize the first letter of every word
        outputString = capitalizeFirstWord(inputString);
        break;
      case "vowel": // capitalize all vowels in the string
          outputString = capitalizeVorC(inputString,"vowel")
        break;
      case "consonant": // capitalize all consonants in the string
          outputString = capitalizeVorC(inputString,"consonant")
        break;
      case "upper": // convert all to uppercase
        outputString = outputString.toUpperCase();
        break;
    }
  }
  return outputString;
}

// test the above function with a variety of tests
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));