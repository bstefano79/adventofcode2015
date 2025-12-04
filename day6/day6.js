const matrix = Array.from({ length: 1000 }, () => Array(1000).fill(0));

const fs = require("fs");

const data = fs.readFileSync("day6.txt", "utf8");

const rows = data.split("\r\n");

rows.forEach((row) => {
  const instr = row.split(" ");

  if (instr[0] == "turn") {
    let c = 0;
    if (instr[1] == "on") {
      c = 1;
    }
    let start = instr[2].split(",");
    let end = instr[4].split(",");
    for (let i = Number(start[0]); i <= Number(end[0]); i++) {
      for (let j = Number(start[1]); j <= Number(end[1]); j++) {
        matrix[i][j] = c;
      }
    }
  } else {
    let start = instr[1].split(",");
    let end = instr[3].split(",");
    let t = [1, 0];
    for (let i = Number(start[0]); i <= Number(end[0]); i++) {
      for (let j = Number(start[1]); j <= Number(end[1]); j++) {
        matrix[i][j] = t[matrix[i][j]];
      }
    }
  }
});
let count = 0;
for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    if (matrix[i][j]) count++;
  }
}

console.log(count);
