const matrix = Array.from({ length: 1000 }, () => Array(1000).fill(0));

const fs = require("fs");

const data = fs.readFileSync("day6.txt", "utf8");

const rows = data.split("\r\n");

rows.forEach((row) => {
  const instr = row.split(" ");

  if (instr[0] == "turn") {
    let c = -1;
    if (instr[1] == "on") {
      c = 1;
    }
    let start = instr[2].split(",");
    let end = instr[4].split(",");
    for (let i = Number(start[0]); i <= Number(end[0]); i++) {
      for (let j = Number(start[1]); j <= Number(end[1]); j++) {
        matrix[i][j] += c;
        matrix[i][j] = matrix[i][j] < 0 ? 0 : matrix[i][j];
      }
    }
  } else {
    let start = instr[1].split(",");
    let end = instr[3].split(",");
    for (let i = Number(start[0]); i <= Number(end[0]); i++) {
      for (let j = Number(start[1]); j <= Number(end[1]); j++) {
        matrix[i][j] += 2;
      }
    }
  }
});
let count = 0;
for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    count += matrix[i][j];
  }
}

console.log(count);
