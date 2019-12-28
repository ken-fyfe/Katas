// determine the instructor with the longest name
const instructorWithLongestName = function(instructors) {
  let instuctorNameLength = 0;
  let instructorLongestName = "";
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > instuctorNameLength) {
      instuctorNameLength = instructors[i].name.length;
      instructorLongestName = instructors[i].name
    }
  }
  return instructorLongestName;
};

// test function
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));