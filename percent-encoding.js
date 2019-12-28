// insert '%20' in place of spaces in strings
const urlEncode = function(text) {
  text = text.trim();  // remove any spaces on outside of string
  outputString = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      outputString += "%20";
    } else {
      outputString += text[i];
    }
  }
  return outputString;
};

// test above function
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));