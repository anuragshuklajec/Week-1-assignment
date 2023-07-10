const { dirname, join } = require("path");
fs = require("fs")

function printFile(err, data) {
    if (!err) {
      console.log(data);
    } else {
      console.log("Some error occurred");
    }
  }
  
fs.readFile(join(dirname(__filename), "a.txt"), "utf8",printFile)

sum = 0
for(var i = 0 ; i < 10000000 ; i++){
    sum+=i
}
console.log(sum);