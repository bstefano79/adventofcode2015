const fs = require("fs");

const data = fs.readFileSync("day8.txt", "utf8");

let rows = data.split("\r\n");

let charAdd = 0;
let charTot = 0;

rows.forEach((row) => {
  const l = row.length;
  charTot += l;
  charAdd += 6;
  for (let i = 1; i < row.length - 1; i++) {
    if (row[i] == "\\") {
      if (row[i + 1] == "\\" || row[i + 1] == '"') {
        i++;
        charAdd += 4;
      } else if (row[i + 1] == "x") {
        charAdd += 2;
      }
    } else {
      charAdd++;
    }
  }
});

console.log(charAdd - charTot);
