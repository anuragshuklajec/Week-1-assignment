const { dirname, join } = require("path");
const fs = require("fs");

function printFile(err, data) {
  if (!err) {
    console.log(data);
  } else {
    console.log("Some error occurred");
  }
}

const filePath = join(dirname(__filename), "a.txt");
const content = "He's so enthusiastic about the same";

fs.writeFile(filePath, content, "utf8", (err) => {
  if (err) {
    console.error("Error occurred while writing the file:", err);
  } else {
    fs.readFile(filePath, "utf8", printFile);
  }
});



