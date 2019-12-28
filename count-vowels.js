// determine the number of vowels in a string
let numberOfVowels = function(data) {
  data = data.toLowerCase(); // convert to lower case first
  let numVowels = 0;
  for (let i = 0; i < data.length; i++) {
    let letter = data[i];
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      numVowels++;
    }
  }
  return numVowels;
};

// test the function here
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));