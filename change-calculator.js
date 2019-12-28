// determine the amount of cash to return from a transaction
let calculateChange = function(total, cash) {
  const denominations = [
    // name, value (in pennies), number in above denomination
    ["twentyDollar", 2000, 1],
    ["tenDollar", 1000, 2],
    ["fiveDollar", 500, 2],
    ["twoDollar", 200, 2],
    ["oneDollar", 100, 2],
    ["quarter", 25, 4],
    ["dime", 10, 2],
    ["nickel", 5, 2],
    ["penny", 1, 5]
  ];

  var returnedChange = cash - total;
  var remainingToChange = returnedChange;
  var returnObject = {};
  var addedChange = false; 
  var numItems = 0;

  for (let i = 0; i < denominations.length; i++) {  // loop through demoninations
    if (remainingToChange > denominations[i][1]) {  // do you need of these denominations?
      for (let j = 1; j <= denominations[i][2]; j++) { // loop through max possible number in this denom
        if (remainingToChange > denominations[i][1]) { // need any more?
          remainingToChange -= denominations[i][1];
          addedChange = true;
          numItems = j;
          if (denominations[i][0] == "penny") {
            numItems ++;
          }
        }
      }
      if (addedChange) {
        returnObject[denominations[i][0]] = numItems;
        addedChange = false;
      }
    }
  }
  return returnObject;
};

// test above function
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));