// read in arrays of numbers and duplicate them, or something like that
let repeatNumbers = function(data) {
  let outputString = "";
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i], data[i][0], data[i][1]);
    for (let j = 0; j < data[i][1]; j++) {
      outputString += data[i][0];
    }
    if (i < data.length - 1) {outputString += ", "}
  }
  return outputString;
};

// test the above function
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));