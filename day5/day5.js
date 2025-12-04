const fs = require("fs");

const data = fs.readFileSync("day5.txt", "utf8");

const rows = data.split("\r\n");

//const regex = /^(?=(?:.*[aeiou]){3,})(?=.*([a-z])\1)(?!.*(?:ab|cd|pq|xy)).*$/;
//part1

const regex = /^(?=(?:.*([a-z]{2}).*\1))(?=(?:.*([a-z]).\2)).*$/;
//part2

let count = 0;
rows.forEach((row) => {
  if (regex.test(row)) {
    count++;
  }
});

console.log(count);
