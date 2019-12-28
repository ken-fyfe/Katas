// read in an array and return the sum of the two largest numbers in said array
function sumLargestNumbers(inputArray) {
  if (inputArray.length < 2) {
    console.log("Error: array must have at least two elements")
    return undefined;
  } else {
    let largest = inputArray[0]; let secondLargest = inputArray[0];
    for (let i = 1; i <= inputArray.length; i++) {
      if (inputArray[i] > largest) {
        secondLargest = largest;
        largest = inputArray[i];
      }
    }
    return secondLargest + largest;
  }
}

// test the function
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));