const fs = require("fs");
var listobject = require("./data.json");

var resultsObj = {};

for (const key in listobject) {
  if (Object.hasOwnProperty.call(listobject, key)) {
    const element = listobject[key];
    resultsObj[element["house_no"]] = element;
  }
}

var jsonContent = JSON.stringify(resultsObj);

fs.writeFile("output.json", jsonContent, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});
