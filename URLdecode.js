// decode URLs and put into an object
const urlDecode = function(inputText) {
  let outputObject = {};
  let groups = inputText.split('&')
  for (let i = 0; i < groups.length; i++) {
    let propertyValue = groups[i].substr(0,groups[i].indexOf('=')) // text before =
    let value = groups[i].substr(groups[i].indexOf('=')+1, groups[i].length) // text after =
    value = value.replace(/%20/g, ' ') // globally replace '%20' with ' '
    outputObject[propertyValue] = value;
  }
  return outputObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);