const fs = require("fs");

const data = fs.readFileSync("day3.txt", "utf8");

let rs = 0;
let cs = 0;
let rr = 0;
let cr = 0;
let map = { "0#0": "" };
let house = 1;

for (let i = 0; i < data.length; i++) {
  switch (data[i]) {
    case "<":
      if (i % 2 == 0) {
        cs--;
      } else {
        cr--;
      }
      break;
    case ">":
      if (i % 2 == 0) {
        cs++;
      } else {
        cr++;
      }
      break;
    case "^":
      if (i % 2 == 0) {
        rs--;
      } else {
        rr--;
      }
      break;
    case "v":
      if (i % 2 == 0) {
        rs++;
      } else {
        rr++;
      }
      break;
  }
  let key;
  if (i % 2 == 0) {
    key = rs + "#" + cs;
  } else {
    key = rr + "#" + cr;
  }
  if (!(key in map)) {
    map[key] = "";
    house++;
  }
}
//console.log(map);
console.log(house);
