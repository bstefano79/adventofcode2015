const fs = require("fs");

const data = fs.readFileSync("day8.txt", "utf8");

let rows = data.split("\r\n");

let charMem = 0;
let charTot = 0;

rows.forEach((row) => {
  charTot += row.length;
  for (let i = 1; i < row.length - 1; i++) {
    if (row[i] == "\\") {
      if (row[i + 1] == "\\" || row[i + 1] == '"') {
        i++;
      } else if (row[i + 1] == "x") {
        i += 3;
      }
    }
    charMem++;
  }
});

console.log(charTot - charMem);
//console.log(charTot);
//console.log(charMem);
