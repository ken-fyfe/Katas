// let's drive around town in a taxi and see how far we get from where we started!
const blocksAway = function(directions) {
  // console.log(directions)
  let xdist = 0;
  let ydist = 0;
  let orientation = undefined;
  let direction = "";
  let distance = undefined;
  for (let i = 0; i < directions.length; i += 2) {
    direction = directions[i];
    distance = directions[i+1];
    if (i === 0) { // initial orientation
      orientation = "north"
    }
    // follow the path and update accordingly
    if (direction === "right") {
      if (orientation === "north") {
        xdist += distance;
        orientation = "east";
      } else if (orientation === "east") {
        ydist -= distance;
        orientation = "south";
      } else if (orientation === "south") {
        xdist -= distance;
        orientation = "west";
      } else if (orientation === "west") {
        ydist += distance;
        orientation = "north";
      }
    } else if (direction === "left") {
      if (orientation === "north") {
        xdist -= distance;
        orientation = "west";
      } else if (orientation === "east") {
        ydist += distance;
        orientation = "north";
      } else if (orientation === "south") {
        xdist += distance;
        orientation = "east";
      } else if (orientation === "west") {
        ydist -= distance;
        orientation = "south";
      }
    } else {
      console.log("Error: direction can only be left or right")
    }
  }
  // shuffle results into an object
  taxiDirections= {
    "east": xdist,
    "north": ydist
  }

  return taxiDirections;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));