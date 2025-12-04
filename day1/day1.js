const fs = require("fs");

const data = fs.readFileSync("day1.txt", "utf8");

let ground = 0;

for (let i = 0; i < data.length; i++) {
  data[i] == "(" ? ground++ : ground--;
}

console.log(ground);
