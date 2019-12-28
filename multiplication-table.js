// make a multiplication table of size n
const multiplicationTable = function(maxValue) {
  outputString = [];
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      outputString += i*j + " ";
    }
    outputString += "\n";
  }
  return outputString;
};

// test above function
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));