const fs = require("fs");

const data = fs.readFileSync("day1.txt", "utf8");

let ground = 0;
let i = 0;
for (; i < data.length; i++) {
  data[i] == "(" ? ground++ : ground--;
  if (ground == -1) break;
}

console.log(i + 1);
