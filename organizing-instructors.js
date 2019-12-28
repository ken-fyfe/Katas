// organize instructors into categories
const organizeInstructors = function(instructors) {
  console.log(instructors)

  //convert
  // var instructorObject = {};
  // for (let i = 0; i < instructors.length; i++) {
  //   instructorObject[instructors[i].name] = instructors[i].course;
  // }
  var instructorObject = {};
  for (let i = 0; i < instructors.length; i++) {
    instructorObject["name"] = instructors[i].name
    instructorObject["course"] = instructors[i].course;
  }

  console.log(instructorObject);
  console.log(instructorObject.name);
  console.log(instructorObject.course);
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
// console.log(organizeInstructors([
//   {name: "Brendan", course: "Blockchain"},
//   {name: "David", course: "Web"},
//   {name: "Martha", course: "iOS"},
//   {name: "Carlos", course: "Web"}
// ]));